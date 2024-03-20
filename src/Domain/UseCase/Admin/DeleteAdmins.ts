import { Admin } from "../../Model/Admin";
import { AdminRepository } from "../../Repository/AdminRepository";

export interface DeleteAdminsUseCase {
  invoke: (id:string) => Promise<Admin>;
}

export class DeleteAdmins implements DeleteAdminsUseCase {
  private projectRepo: AdminRepository;
  constructor(_projectRepo: AdminRepository) {
    this.projectRepo = _projectRepo;
  }

  async invoke(id:string) {
    return this.projectRepo.deleteAdmins(id);
  }
}
