import { useState } from "react";
import ProjectAPIDataSourceImpl from "../../../Data/DataSource/API/ProjectAPIDataSource";
import { ProjectRepositoryImpl } from "../../../Data/Repository/ProjectRepositoryImpl";
import { Project } from "../../../Domain/Model/Project";
import { GetProjects } from "../../../Domain/UseCase/Project/GetProjects";
import { toast } from "react-toastify";

export default function RepositoriesModel() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project>();

  const projectsDataSourceImpl = new ProjectAPIDataSourceImpl();
  const projectsRepositoryImpl = new ProjectRepositoryImpl(projectsDataSourceImpl);

  const getProjectsUseCase = new GetProjects(projectsRepositoryImpl);

  async function getProjects() {
    setProjects(await getProjectsUseCase.invoke());
  }

  function onChangeValue(id: String) {
    let project = projects.find(item=> item.id === id)
    setProject(project);
  }

  return {
    getProjects,
    onChangeValue,
    projects,
    project
  };
}
