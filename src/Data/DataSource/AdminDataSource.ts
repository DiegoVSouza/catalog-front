import { AdminPost, AdminPut } from "../../Domain/Model/Admin";
import { AdminAPIEntity } from "../Entity/AdminAPIEntity";

export default interface AdminDataSource {
  getAdmins(): Promise<AdminAPIEntity[]>;
  postAdmins(data:AdminPost): Promise<AdminAPIEntity>;
  putAdmins(data:AdminPut): Promise<AdminAPIEntity>;
  deleteAdmins(id:string): Promise<AdminAPIEntity>;
}
