import { IUser } from '../store/main/main.slice'

export interface ILoginResponse {
  action: string
  token: string
  user: IUser
}
