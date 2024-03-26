import { Admin, AdminPut } from "../../Model/Admin";
import { AdminRepository } from "../../Repository/AdminRepository";

export interface PutAdminsUseCase {
  invoke: (data:AdminPut) => Promise<Admin>;
}

export class PutAdmins implements PutAdminsUseCase {
  private adminRepo: AdminRepository;
  constructor(_adminRepo: AdminRepository) {
    this.adminRepo = _adminRepo;
  }

  async invoke(data:AdminPut) {
    return this.adminRepo.putAdmins(data);
  }
}
