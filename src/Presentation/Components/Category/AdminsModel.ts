import { useEffect, useState } from "react";
import { Admin, AdminPost, AdminPut } from "../../../Domain/Model/Admin";
import { AdminRepositoryImpl } from "../../../Data/Repository/AdminRepositoryImpl";
import { GetAdmins } from "../../../Domain/UseCase/Admin/GetAdmins";
import { PostAdmins } from "../../../Domain/UseCase/Admin/PostAdmins";
import { PutAdmins } from "../../../Domain/UseCase/Admin/PutAdmins";
import { DeleteAdmins } from "../../../Domain/UseCase/Admin/DeleteAdmins";
import AdminAPIDataSourceImpl from "../../../Data/API/AdminAPIDataSource";

export default function AdminsModel() {
  const [Admins, setAdmins] = useState<Admin[]>([]);
  const [Admin, setAdmin] = useState<Admin>();

  const AdminsDataSourceImpl = new AdminAPIDataSourceImpl();
  const AdminsRepositoryImpl = new AdminRepositoryImpl(AdminsDataSourceImpl);

  const getAdminsUseCase = new GetAdmins(AdminsRepositoryImpl);
  const postAdminsUseCase = new PostAdmins(AdminsRepositoryImpl);
  const putAdminsUseCase = new PutAdmins(AdminsRepositoryImpl);
  const deleteAdminsUseCase = new DeleteAdmins(AdminsRepositoryImpl);

  async function getAdmins() {
    setAdmins(await getAdminsUseCase.invoke());
  }
  async function postAdmins(data:AdminPost) {
    setAdmin(await postAdminsUseCase.invoke(data));
  }
  async function putAdmins(data:AdminPut) {
    setAdmin(await putAdminsUseCase.invoke(data));
  }
  async function deleteAdmins(id:string) {
    setAdmin(await deleteAdminsUseCase.invoke(id));
    await getAdmins()
  }

  function onChangeValue(id: String) {
    let Admin = Admins.find(item=> item.id === id)
    setAdmin(Admin);
  }

  return {
    getAdmins,
    postAdmins,
    putAdmins,
    deleteAdmins,
    onChangeValue,
    Admins,
    Admin
  };
}
