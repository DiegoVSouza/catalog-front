import { Product } from "../../Model/Product";
import { ProductRepository } from "../../Repository/ProductRepository";

export interface GetProductsUseCase {
  invoke: () => Promise<Product[]>;
}

export class GetProducts implements GetProductsUseCase {
  private productRepo: ProductRepository;
  constructor(_productRepo: ProductRepository) {
    this.productRepo = _productRepo;
  }

  async invoke() {
    return this.productRepo.getProducts();
  }
}
