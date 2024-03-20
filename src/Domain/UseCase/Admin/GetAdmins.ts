import { Admin } from "../../Model/Admin";
import { AdminRepository } from "../../Repository/AdminRepository";

export interface GetAdminsUseCase {
  invoke: () => Promise<Admin[]>;
}

export class GetAdmins implements GetAdminsUseCase {
  private adminRepo: AdminRepository;
  constructor(_adminRepo: AdminRepository) {
    this.adminRepo = _adminRepo;
  }

  async invoke() {
    return this.adminRepo.getAdmins();
  }
}
