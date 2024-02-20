import { useState } from "react";
import ProjectAPIDataSourceImpl from "../../../Data/DataSource/API/ProjectAPIDataSource";
import { ProjectRepositoryImpl } from "../../../Data/Repository/ProjectRepositoryImpl";
import { Project } from "../../../Domain/Model/Project";
import { GetProjects } from "../../../Domain/UseCase/Project/GetProjects";
import { toast } from "react-toastify";

export default function TodoListViewModel() {
  const [todos, setTodos] = useState<Project[]>([]);
  const [value, setValue] = useState("");

  const projectsDataSourceImpl = new ProjectAPIDataSourceImpl();
  const projectsRepositoryImpl = new ProjectRepositoryImpl(projectsDataSourceImpl);

  const getTodosUseCase = new GetProjects(projectsRepositoryImpl);

  async function getTodos() {
    setTodos(await getTodosUseCase.invoke());
  }

  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return {
    getTodos,
    onChangeValue,
    todos,
    value,
  };
}
