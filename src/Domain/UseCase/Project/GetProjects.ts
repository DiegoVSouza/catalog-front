import { Project } from "../../Model/Project";
import { ProjectRepository } from "../../Repository/ProjectRepository";

export interface GetProjectsUseCase {
  invoke: () => Promise<Project[]>;
}

export class GetProjects implements GetProjectsUseCase {
  private projectRepo: ProjectRepository;
  constructor(_projectRepo: ProjectRepository) {
    this.projectRepo = _projectRepo;
  }

  async invoke() {
    return this.projectRepo.getProjects();
  }
}
