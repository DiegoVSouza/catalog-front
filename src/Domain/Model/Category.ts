export interface Category {
  id: string,
  title: string,
  description: string,
  ownerId: string
}

export interface CategoryPost {
  title: string,
  description: string,
  ownerId: string
}

export interface CategoryPut {
  id: string,
  title?: string,
  description?: string,
  ownerId?: string
}

