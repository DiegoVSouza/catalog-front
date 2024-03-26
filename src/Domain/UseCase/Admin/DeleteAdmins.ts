import { Admin } from "../../Model/Admin";
import { AdminRepository } from "../../Repository/AdminRepository";

export interface DeleteAdminsUseCase {
  invoke: (id:string) => Promise<Admin>;
}

export class DeleteAdmins implements DeleteAdminsUseCase {
  private categoryRepo: AdminRepository;
  constructor(_categoryRepo: AdminRepository) {
    this.categoryRepo = _categoryRepo;
  }

  async invoke(id:string) {
    return this.categoryRepo.deleteAdmins(id);
  }
}
