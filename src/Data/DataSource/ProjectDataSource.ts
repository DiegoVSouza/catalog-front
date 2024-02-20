import { Project } from "../../Domain/Model/Project";

export default interface ProjectDataSource {
  getProjects(): Promise<Project[]>;
}
