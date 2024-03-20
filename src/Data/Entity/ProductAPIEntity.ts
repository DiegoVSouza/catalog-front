export interface ProductAPIEntity {
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
