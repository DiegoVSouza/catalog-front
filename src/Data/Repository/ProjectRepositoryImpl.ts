import { ProjectRepository } from "../../Domain/Repository/ProjectRepository";
import ProjectDataSource from "../DataSource/ProjectDataSource";

export class ProjectRepositoryImpl implements ProjectRepository {
  dataSource: ProjectDataSource;

  constructor(_datasource: ProjectDataSource) {
    this.dataSource = _datasource;
  }

  async getProjects() {
    return this.dataSource.getProjects();
  }

}
