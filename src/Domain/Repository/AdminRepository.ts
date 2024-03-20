import { Admin, AdminPost, AdminPut } from "../Model/Admin";

export interface AdminRepository {
  getAdmins(): Promise<Admin[]>;
  postAdmins(data:AdminPost): Promise<Admin>;
  putAdmins(data:AdminPut): Promise<Admin>;
  deleteAdmins(id:string): Promise<Admin>;
}
