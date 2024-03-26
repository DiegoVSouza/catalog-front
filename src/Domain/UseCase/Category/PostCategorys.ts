import { Category, CategoryPost } from "../../Model/Category";
import { CategoryRepository } from "../../Repository/CategoryRepository";

export interface PostCategorysUseCase {
  invoke: (data:CategoryPost) => Promise<Category>;
}

export class PostCategorys implements PostCategorysUseCase {
  private categoryRepo: CategoryRepository;
  constructor(_categoryRepo: CategoryRepository) {
    this.categoryRepo = _categoryRepo;
  }

  async invoke(data:CategoryPost) {
    return this.categoryRepo.postCategorys(data);
  }
}
