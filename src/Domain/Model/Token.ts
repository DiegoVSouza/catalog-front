import { Admin } from "./Admin"
import { Store } from "./Store"

export interface Token {
  accessToken: string,
  name: string
}

export interface Login {
  email: string,
  password: string
}

export interface UserStore {
  admin: Admin
  store:Store
}