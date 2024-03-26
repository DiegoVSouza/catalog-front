import { Product, ProductPut } from "../../Model/Product";
import { ProductRepository } from "../../Repository/ProductRepository";

export interface PutProductsUseCase {
  invoke: (data:ProductPut) => Promise<Product>;
}

export class PutProducts implements PutProductsUseCase {
  private productRepo: ProductRepository;
  constructor(_productRepo: ProductRepository) {
    this.productRepo = _productRepo;
  }

  async invoke(data:ProductPut) {
    return this.productRepo.putProducts(data);
  }
}
