import { Project } from "../../../Domain/Model/Project";
import ProjectDataSource from "../ProjectDataSource";
import { ProjectAPIEntity } from "./Entity/ProjectAPIEntity";
import localDB from "./LocalDB";
import { initialData } from './InitialData'

export default class ProjectAPIDataSourceImpl implements ProjectDataSource {
  db = localDB<ProjectAPIEntity>("projects", initialData);
  async getProjects(): Promise<Project[]> {
    const data = this.db?.getAll();
    return data?.map((item) => ({
      id: item.id,
      title: item.title,
      link: item.link,
      isComplete: item.is_completed,
      description: item.description,
      stacks: item.stacks,
      image: item.image,
      deployLink: item.deploy_link
    }));
  }

}
