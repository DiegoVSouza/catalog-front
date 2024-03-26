import { Category, CategoryPut } from "../../Model/Category";
import { CategoryRepository } from "../../Repository/CategoryRepository";

export interface PutCategorysUseCase {
  invoke: (data:CategoryPut) => Promise<Category>;
}

export class PutCategorys implements PutCategorysUseCase {
  private categoryRepo: CategoryRepository;
  constructor(_categoryRepo: CategoryRepository) {
    this.categoryRepo = _categoryRepo;
  }

  async invoke(data:CategoryPut) {
    return this.categoryRepo.putCategorys(data);
  }
}
