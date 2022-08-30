import { RoleValue } from '@/models/RoleValue'
import { JwtResponse } from '@/graphql/generated'
import { RegisterUser } from '@/shared/types/auth/RegisterUser'
import { ServiceResponse } from '@models/ServiceResponse'

export interface IAuthService {
  invite(email: string, role: RoleValue): Promise<ServiceResponse<string>>
  checkEmail(email: string): Promise<ServiceResponse<boolean>>
  register(user: RegisterUser): Promise<ServiceResponse<JwtResponse>>
  // activate(ticket: string): Promise<ServiceResponse<string>>
  login(email: string, password: string): Promise<ServiceResponse<JwtResponse>>
  goggleUrl(): Promise<ServiceResponse<string>>
  googleCallback(code: string): Promise<ServiceResponse<string>>
  refresh(
    refreshToken: string
  ): Promise<ServiceResponse<{ tokens: JwtResponse }>>
  requestPasswordReset(email: string): Promise<ServiceResponse<string>>
  resetPassword(
    ticket: string,
    password: string
  ): Promise<ServiceResponse<JwtResponse>>
}
