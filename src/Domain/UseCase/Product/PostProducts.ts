import { Product, ProductPost } from "../../Model/Product";
import { ProductRepository } from "../../Repository/ProductRepository";

export interface PostProductsUseCase {
  invoke: (data:ProductPost) => Promise<Product>;
}

export class PostProducts implements PostProductsUseCase {
  private productRepo: ProductRepository;
  constructor(_productRepo: ProductRepository) {
    this.productRepo = _productRepo;
  }

  async invoke(data:ProductPost) {
    return this.productRepo.postProducts(data);
  }
}
