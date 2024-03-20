import { Admin, AdminPost } from "../../Model/Admin";
import { AdminRepository } from "../../Repository/AdminRepository";

export interface PostAdminsUseCase {
  invoke: (data:AdminPost) => Promise<Admin>;
}

export class PostAdmins implements PostAdminsUseCase {
  private projectRepo: AdminRepository;
  constructor(_projectRepo: AdminRepository) {
    this.projectRepo = _projectRepo;
  }

  async invoke(data:AdminPost) {
    return this.projectRepo.postAdmins(data);
  }
}
