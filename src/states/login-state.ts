import { atom } from 'recoil'

export type UserInfo = {
  email: string
  name: string
  token: string
}
export const loginUserInfo = atom<UserInfo | null>({
  key: 'login-user-info-state',
  default: null,
})
