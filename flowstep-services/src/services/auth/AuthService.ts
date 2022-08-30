import { Service } from 'typedi'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import { IAuthService } from './IAuthService'
import db from '@/shared/db'

import { ServiceResponse } from '@/models/ServiceResponse'
import { Account } from '@/models/Account'
import { User } from '@/models/User'
import { AccountRole } from '@/models/AccountRole'
import { RoleValue } from '@/models/RoleValue'

import { hashPassword, verifyPassword } from '@shared/bcrypt'
import { emailClient } from '@shared/email'
import { JwtResponse } from '@/graphql/generated'
import { RegisterUser } from '@/shared/types/auth/RegisterUser'
import { generateRefreshToken, generateToken } from '@/shared/jwt'
import { RefreshToken } from '@/models/RefreshToken'
import { validateAccount, updateTicket, isTicketValid } from '@/shared/account'
import { AccountValidation } from '@/shared/types/auth/AccountValiation'
import { Invite } from '@/models/Invite'
import { getGoogleAuthURL, getGoogleUser } from '@/shared/google'
@Service()
export class AuthService implements IAuthService {
  async goggleUrl(): Promise<ServiceResponse<string>> {
    const response = new ServiceResponse<string>()
    const googleUrl = await getGoogleAuthURL()

    response.payload = googleUrl
    return response
  }
  async googleCallback(code: string): Promise<ServiceResponse<string>> {
    const response: ServiceResponse<string> = new ServiceResponse<string>()
    try {
      const profile = await getGoogleUser(code)

      const account = await db<Account>('accounts')
        .where({ email: profile.email })
        .first()

      const { email, name, id, imageUrl } = profile
      response.status = 302

      if (!account) {
        const { payload } = await this.register({
          email,
          first_name: name,
          avatar_url: imageUrl,
          google_id: id,
          last_name: null,
          password: null,
        })

        response.payload = `${process.env.FRONTEND_URL}?token=${payload?.token}&refresh_token=${payload?.refresh_token}`
        return response
      }
      const user = await db<User>('users')
        .where({ id: account.user_id })
        .first()

      if (!user?.google_id) {
        response.payload = `${
          process.env.FRONTEND_URL
        }?error=${'User already registered without google'}`
        return response
      }

      const newPayload = {
        token: await generateToken(account.id),
        refresh_token: await generateRefreshToken(account.id),
      }
      response.status = 302
      response.payload = `${process.env.FRONTEND_URL}?token=${newPayload?.token}&refresh_token=${newPayload?.refresh_token}`
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }

  async invite(
    email: string,
    role: RoleValue
  ): Promise<ServiceResponse<string>> {
    const response: ServiceResponse<string> = new ServiceResponse<string>()
    try {
      const invite = await db<Invite>('invites').where({ email }).first()

      // TODO check if user exists
      // TODO check if user is already invited
      if (invite && invite.expires_at > dayjs().toDate()) {
        response.status = 400
        response.error = 'User already invited'
        return response
      }
      // Delete existing invites
      await db<Invite>('invites').where({ email }).del()

      // Create invite
      const ticket = uuidv4()

      await db<Invite>('invites')
        .returning('id')
        .insert({
          role,
          email,
          ticket,
          expires_at: dayjs().add(1, 'day').toDate(),
        })

      // Send email
      await emailClient.send({
        template: 'invite',
        message: {
          to: email,
          headers: {
            'x-ticket': {
              prepared: true,
              value: ticket,
            },
          },
        },
        locals: {
          url: `http://${process.env.FRONTEND_URL}/register?ticket=${ticket}`,
        },
      })
      response.payload = 'Success'
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
  async checkEmail(email: string): Promise<ServiceResponse<boolean>> {
    const response: ServiceResponse<boolean> = new ServiceResponse<boolean>()
    try {
      const account = await db<Account>('accounts').where({ email }).first()
      const accountValidation: AccountValidation = validateAccount(
        true,
        account
      )
      if (!accountValidation.is_valid) {
        response.payload = false
        return response
      }
      response.payload = true
    } catch (error: any) {
      response.error = error.message
      response.status = 500
    }
    return response
  }
  async resetPassword(
    ticket: string,
    password: string
  ): Promise<ServiceResponse<JwtResponse>> {
    const response: ServiceResponse<JwtResponse> =
      new ServiceResponse<JwtResponse>()
    try {
      // Get account by ticket
      const account = await db<Account>('accounts').where({ ticket }).first()

      const accountValidation: AccountValidation = validateAccount(
        true,
        account
      )
      // if account not found
      if (!accountValidation.is_valid) {
        response.status = 400
        response.error = accountValidation.message
        return response
      }

      // if ticket is expired
      if (isTicketValid(account?.ticket_expires_at)) {
        response.status = 400
        response.error = 'Ticket is expired'
        return response
      }

      if (account) {
        // Activate account
        await updateTicket(account?.id)
        // Update password
        await db<Account>('accounts')
          .where({ id: account?.id })
          .update({
            password_hash: await hashPassword(password),
          })

        response.payload = {
          token: await generateToken(account?.id),
          refresh_token: await generateRefreshToken(account?.id),
        }
      }
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
  async requestPasswordReset(email: string): Promise<ServiceResponse<string>> {
    const response: ServiceResponse<string> = new ServiceResponse<string>()
    try {
      // Get account by email
      const account = await db<Account>('accounts').where({ email }).first()

      // if account not found
      const accountValidation: AccountValidation = validateAccount(
        true,
        account
      )
      if (!accountValidation.is_valid) {
        response.status = 400
        response.error = accountValidation.message
        return response
      }
      // Generate ticket
      const ticket = uuidv4()
      await updateTicket(account?.id, ticket)

      // Send email
      emailClient.send({
        template: 'lost-password',
        message: {
          to: account?.email,
          headers: {
            'x-ticket': {
              prepared: true,
              value: ticket,
            },
          },
        },
        locals: {
          url: `${process.env.FRONTEND_URL}/resetPassword?ticket=${ticket}&email=${email}`,
        },
      })
      response.payload = 'Success'
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
  async refresh(
    refresh_token: string
  ): Promise<ServiceResponse<{ tokens: JwtResponse }>> {
    const response: ServiceResponse<{ tokens: JwtResponse }> =
      new ServiceResponse<{ tokens: JwtResponse }>()
    try {
      // Get account by refresh token
      const account = await db<RefreshToken>('refresh_tokens')
        .where({ refresh_token })
        .leftJoin('accounts', 'accounts.id', 'refresh_tokens.account_id')
        .first()
      // if account not found
      if (!account) {
        response.status = 400
        response.error = 'Invalid refresh token'
        return response
      }

      // TODO if refresh token is expired

      //
      response.payload = {
        tokens: {
          token: await generateToken(account.id),
          refresh_token: await generateRefreshToken(account.id),
        },
      }
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
  async login(
    email: string,
    password: string
  ): Promise<ServiceResponse<JwtResponse>> {
    const response: ServiceResponse<JwtResponse> =
      new ServiceResponse<JwtResponse>()
    try {
      const account = await db<Account>('accounts').where({ email }).first()
      // if account not found
      if (!account) {
        response.status = 400
        response.error = 'Account does not exist'
        return response
      }
      // if account is not active
      if (!account.is_active) {
        response.status = 400
        response.error = 'Account is not activated'
        return response
      }

      if (account.password_hash) {
        // if password is incorrect
        if (!(await verifyPassword(password, account.password_hash))) {
          response.status = 400
          response.error = 'Invalid password'
          return response
        }
        // Sign token and send to client
        response.payload = {
          token: await generateToken(account.id),
          refresh_token: await generateRefreshToken(account.id),
        }
      }
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
  // async activate(ticket: string): Promise<ServiceResponse<string>> {
  //   const response: ServiceResponse<string> = new ServiceResponse<string>()
  //   try {
  //     // Get account by ticket
  //     const account = await db<Account>('accounts').where({ ticket }).first()
  //     const frontend_url = process.env.FRONTEND_URL

  //     // if account not found
  //     if (!validateAccount(false, account).is_valid) {
  //       response.status = 302
  //       response.payload = frontend_url + '/not-found'
  //       return response
  //     }

  //     // if ticket is expired
  //     if (isTicketValid(account?.ticket_expires_at)) {
  //       response.status = 302
  //       response.payload = frontend_url + '/expired'
  //       return response
  //     }
  //     // Activate account
  //     await db<Account>('accounts').where({ ticket }).update({
  //       ticket: null,
  //       ticket_expires_at: null,
  //       is_active: true,
  //     })
  //     response.status = 302
  //     response.payload = frontend_url + '/success'
  //   } catch (error: any) {
  //     response.status = 500
  //     response.error = error.message
  //   }
  //   return response
  // }
  async register(user: RegisterUser): Promise<ServiceResponse<JwtResponse>> {
    const response: ServiceResponse<JwtResponse> =
      new ServiceResponse<JwtResponse>()
    try {
      //Check if user already exists
      const account = await db<Account>('accounts')
        .where({ email: user.email })
        .first()
      if (account) {
        response.status = 400
        response.error = 'Email already exists'
        return response
      }
      //TODO - check if requested roles are valid

      // Check invite
      // const invite = await db<Invite>('invites')
      //   .where({ ticket: user.ticket })
      //   .andWhere(function () {
      //     this.where('expires_at', '>', dayjs().toDate())
      //   })
      //   .first()
      // if (!invite || invite.email !== user.email) {
      //   response.status = 400
      //   response.error = 'Invalid ticket'
      //   return response
      // }

      //Create new user
      const [user_id]: string = await db<User>('users').returning('id').insert({
        first_name: user.first_name,
        last_name: user.last_name,
        avatar_url: user.avatar_url,
        google_id: user.google_id,
      })

      //Create new account
      const [account_id]: string = await db<Account>('accounts')
        .returning('id')
        .insert({
          user_id,
          email: user.email,
          password_hash: user.password
            ? await hashPassword(user.password)
            : null,
          is_active: true,
        })

      // Insert account roles
      const roles: RoleValue[] = [RoleValue.FREE, RoleValue.USER]
      const accountRoles = roles.map((role: RoleValue) => {
        return {
          account_id,
          role,
        }
      })
      await db<AccountRole>('account_roles').insert(accountRoles)

      response.payload = {
        token: await generateToken(account_id),
        refresh_token: await generateRefreshToken(account_id),
      }
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
}
