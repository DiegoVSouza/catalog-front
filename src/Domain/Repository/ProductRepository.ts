import { Product, ProductPost, ProductPut } from "../Model/Product";

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  postProducts(data:ProductPost): Promise<Product>;
  putProducts(data:ProductPut): Promise<Product>;
  deleteProducts(id:string): Promise<Product>;
}
