import { StorePost, StorePut } from "../../Domain/Model/Store";
import { StoreRepository } from "../../Domain/Repository/StoreRepository";
import ProjectDataSource from "../DataSource/StoreDataSource";

export class StoreRepositoryImpl implements StoreRepository {
  dataSource: ProjectDataSource;

  constructor(_datasource: ProjectDataSource) {
    this.dataSource = _datasource;
  }

  async getStores() {
    return this.dataSource.getStores();
  }
  async postStores(data:StorePost) {
    return this.dataSource.postStores(data);
  }
  async putStores(data:StorePut) {
    return this.dataSource.putStores(data);
  }
  async deleteStores(id:string) {
    return this.dataSource.deleteStores(id);
  }

}
