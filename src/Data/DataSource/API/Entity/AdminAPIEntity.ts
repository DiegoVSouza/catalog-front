export interface AdminAPIEntity {
  id: string,
  email: string,
  name: string,
  password: string,
  role: {
      id: string,
      value: string,
      label: string
  }
}
