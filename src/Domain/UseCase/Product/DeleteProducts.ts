import { Product } from "../../Model/Product";
import { ProductRepository } from "../../Repository/ProductRepository";

export interface DeleteProductsUseCase {
  invoke: (id:string) => Promise<Product>;
}

export class DeleteProducts implements DeleteProductsUseCase {
  private productRepo: ProductRepository;
  constructor(_productRepo: ProductRepository) {
    this.productRepo = _productRepo;
  }

  async invoke(id:string) {
    return this.productRepo.deleteProducts(id);
  }
}
