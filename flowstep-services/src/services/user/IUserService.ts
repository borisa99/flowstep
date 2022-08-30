import { ServiceResponse } from '@/models/ServiceResponse'
import { UserResponse } from '@/graphql/generated'
export interface IUserService {
  me(account_id: string): Promise<ServiceResponse<UserResponse>>
  changePassword(
    account_id: string,
    oldPassword: string,
    newPassword: string
  ): Promise<ServiceResponse<string>>
}
