import { AdminPost, AdminPut } from "../../Domain/Model/Admin";
import { AdminRepository } from "../../Domain/Repository/AdminRepository";
import ProjectDataSource from "../DataSource/AdminDataSource";

export class AdminRepositoryImpl implements AdminRepository {
  dataSource: ProjectDataSource;

  constructor(_datasource: ProjectDataSource) {
    this.dataSource = _datasource;
  }

  async getAdmins() {
    return this.dataSource.getAdmins();
  }
  async postAdmins(data:AdminPost) {
    return this.dataSource.postAdmins(data);
  }
  async putAdmins(data:AdminPut) {
    return this.dataSource.putAdmins(data);
  }
  async deleteAdmins(id:string) {
    return this.dataSource.deleteAdmins(id);
  }

}
