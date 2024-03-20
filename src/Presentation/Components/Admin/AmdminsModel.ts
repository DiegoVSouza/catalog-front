import { useState } from "react";
import AdminAPIDataSourceImpl from "../../../Data/DataSource/API/AdminAPIDataSource";
import { Admin } from "../../../Domain/Model/Admin";
import { AdminRepositoryImpl } from "../../../Data/Repository/AdminRepositoryImpl";
import { GetAdmins } from "../../../Domain/UseCase/Admin/GetAdmins";

export default function RepositoriesModel() {
  const [Admins, setAdmins] = useState<Admin[]>([]);
  const [Admin, setAdmin] = useState<Admin>();

  const AdminsDataSourceImpl = new AdminAPIDataSourceImpl();
  const AdminsRepositoryImpl = new AdminRepositoryImpl(AdminsDataSourceImpl);

  const getAdminsUseCase = new GetAdmins(AdminsRepositoryImpl);

  async function getAdmins() {
    setAdmins(await getAdminsUseCase.invoke());
  }

  function onChangeValue(id: String) {
    let Admin = Admins.find(item=> item.id === id)
    setAdmin(Admin);
  }

  return {
    getAdmins,
    onChangeValue,
    Admins,
    Admin
  };
}
