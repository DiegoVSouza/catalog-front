import { Admin, AdminPost } from "../../Model/Admin";
import { AdminRepository } from "../../Repository/AdminRepository";

export interface PostAdminsUseCase {
  invoke: (data:AdminPost) => Promise<Admin>;
}

export class PostAdmins implements PostAdminsUseCase {
  private adminRepo: AdminRepository;
  constructor(_adminRepo: AdminRepository) {
    this.adminRepo = _adminRepo;
  }

  async invoke(data:AdminPost) {
    return this.adminRepo.postAdmins(data);
  }
}
