import { Category } from "../../Model/Category";
import { CategoryRepository } from "../../Repository/CategoryRepository";

export interface DeleteCategorysUseCase {
  invoke: (id:string) => Promise<Category>;
}

export class DeleteCategorys implements DeleteCategorysUseCase {
  private categoryRepo: CategoryRepository;
  constructor(_categoryRepo: CategoryRepository) {
    this.categoryRepo = _categoryRepo;
  }

  async invoke(id:string) {
    return this.categoryRepo.deleteCategorys(id);
  }
}
