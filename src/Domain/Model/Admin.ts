

export interface Admin {
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

export interface AdminPost {
  email: string,
  name: string,
  password: string,
  roleId: string
}

export interface AdminPut {
  id: string,
  email?: string,
  name?: string,
  password?: string,
}

