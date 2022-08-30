import { IUserService } from './IUserService'
import { Service } from 'typedi'
import { ServiceResponse } from '@/models/ServiceResponse'
import { generateUserPayload } from '@/shared/jwt'
import { UserResponse } from '@/graphql/generated'
import db from '@/shared/db'
import { hashPassword, verifyPassword } from '@/shared/bcrypt'
import { Account } from '@/models/Account'

@Service()
export class UserService implements IUserService {
  async changePassword(
    account_id: string,
    oldPassword: string,
    newPassword: string
  ): Promise<ServiceResponse<string>> {
    const response: ServiceResponse<string> = new ServiceResponse<string>()
    try {
      // Get user account
      const account = await db<Account>('accounts')
        .where({ id: account_id })
        .first()

      // Check if account exists
      if (!account || !account.password_hash) {
        response.status = 404
        response.error = 'Account not found'
        return response
      }

      // Verify old password
      const isValid = await verifyPassword(oldPassword, account.password_hash)
      if (!isValid) {
        response.status = 400
        response.error = 'Invalid password'
        return response
      }

      // Update password
      const passwordHash = await hashPassword(newPassword)
      await db<Account>('accounts')
        .where({ id: account_id })
        .update({ password_hash: passwordHash })

      response.payload = 'success'
    } catch (error: any) {
      response.error = error.message
      response.status = 500
    }

    return response
  }
  async me(account_id: string): Promise<ServiceResponse<UserResponse>> {
    const response: ServiceResponse<UserResponse> =
      new ServiceResponse<UserResponse>()
    try {
      response.payload = await generateUserPayload(account_id)
    } catch (error: any) {
      response.error = error.message
      response.status = 500
    }
    return response
  }
}
