export interface Store {
  id: string,
  email: string,
  name: string,
  neighborhood: string,
  street: string,
  number: number,
  city: string,
  state: string,
  cep: string,
  phone: string,
  file: string,
  password: string,
  role: {
    id: string,
    value: string,
    label: string
  },
  payment_method: {
    creditcard: boolean,
    money: boolean,
    pix: boolean
  }
}

export interface StorePost {
  email: string,
  name: string,
  neighborhood: string,
  street: string,
  number: number,
  city: string,
  state: string,
  cep: string,
  phone: string,
  file: string,
  password: string,
  roleId: string,
  payment_method: {
    creditcard: boolean,
    money: boolean,
    pix: boolean
  }
}

export interface StorePut {
  id: string,
  email: string,
  name: string,
  neighborhood: string,
  street: string,
  number: number,
  city: string,
  state: string,
  cep: string,
  phone: string,
  file: string,
  password: string,
  roleId: string,
  payment_method: {
    creditcard: boolean,
    money: boolean,
    pix: boolean
  }
}

