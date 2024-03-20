export interface StoreAPIEntity {
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
