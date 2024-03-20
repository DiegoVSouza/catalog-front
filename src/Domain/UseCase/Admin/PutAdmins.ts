import { Admin, AdminPut } from "../../Model/Admin";
import { AdminRepository } from "../../Repository/AdminRepository";

export interface PutAdminsUseCase {
  invoke: (data:AdminPut) => Promise<Admin>;
}

export class PutAdmins implements PutAdminsUseCase {
  private projectRepo: AdminRepository;
  constructor(_projectRepo: AdminRepository) {
    this.projectRepo = _projectRepo;
  }

  async invoke(data:AdminPut) {
    return this.projectRepo.putAdmins(data);
  }
}
