import { Project } from "../Model/Project";

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
}
