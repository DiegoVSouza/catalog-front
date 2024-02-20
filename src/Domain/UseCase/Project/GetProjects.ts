import { Project } from "../../Model/Project";
import { ProjectRepository } from "../../Repository/ProjectRepository";

export interface GetProjectsUseCase {
  invoke: () => Promise<Project[]>;
}

export class GetProjects implements GetProjectsUseCase {
  private todoRepo: ProjectRepository;
  constructor(_todoRepo: ProjectRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke() {
    return this.todoRepo.getProjects();
  }
}
