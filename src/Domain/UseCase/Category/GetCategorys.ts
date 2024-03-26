import { Category } from "../../Model/Category";
import { CategoryRepository } from "../../Repository/CategoryRepository";

export interface GetCategorysUseCase {
  invoke: () => Promise<Category[]>;
}

export class GetCategorys implements GetCategorysUseCase {
  private categoryRepo: CategoryRepository;
  constructor(_categoryRepo: CategoryRepository) {
    this.categoryRepo = _categoryRepo;
  }

  async invoke() {
    return this.categoryRepo.getCategorys();
  }
}
