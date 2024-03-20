import { CategoryPost, CategoryPut } from "../../Domain/Model/Category";
import { CategoryRepository } from "../../Domain/Repository/CategoryRepository";
import ProjectDataSource from "../DataSource/CategoryDataSource";

export class CategoryRepositoryImpl implements CategoryRepository {
  dataSource: ProjectDataSource;

  constructor(_datasource: ProjectDataSource) {
    this.dataSource = _datasource;
  }

  async getCategorys() {
    return this.dataSource.getCategorys();
  }
  async postCategorys(data:CategoryPost) {
    return this.dataSource.postCategorys(data);
  }
  async putCategorys(data:CategoryPut) {
    return this.dataSource.putCategorys(data);
  }
  async deleteCategorys(id:string) {
    return this.dataSource.deleteCategorys(id);
  }

}
