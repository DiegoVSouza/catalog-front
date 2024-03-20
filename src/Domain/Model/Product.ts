export interface Product {
  id: string,
  title: string,
  description: string,
  price: number,
  ownerId: string,
  categoryId: string,
  category: {
    id: string,
    title: string,
    description: string,
    ownerId: string
  },
  image_url: string
}

export interface ProductPost {
  title: string,
  description: string,
  price: number,
  ownerId: string,
  categoryId: string,
  image_url: string
}

export interface ProductPut {
  id:string,
  title: string,
  description: string,
  price: number,
  categoryId: string,
}

