import { useEffect, useState } from "react";
import { Admin, AdminPost, AdminPut } from "../../Domain/Model/Admin";
import { AdminRepositoryImpl } from "../../Data/Repository/AdminRepositoryImpl";
import { GetAdmins } from "../../Domain/UseCase/Admin/GetAdmins";
import { PostAdmins } from "../../Domain/UseCase/Admin/PostAdmins";
import { PutAdmins } from "../../Domain/UseCase/Admin/PutAdmins";
import { DeleteAdmins } from "../../Domain/UseCase/Admin/DeleteAdmins";
import AdminAPIDataSourceImpl from "../../Data/API/AdminAPIDataSource";

export default function AdminModel() {
  const [Admins, setAdmins] = useState<Admin[]>([]);
  const [Admin, setAdmin] = useState<Admin>();

  const adminsDataSourceImpl = new AdminAPIDataSourceImpl();
  const adminsRepositoryImpl = new AdminRepositoryImpl(adminsDataSourceImpl);

  const getAdminsUseCase = new GetAdmins(adminsRepositoryImpl);
  const postAdminsUseCase = new PostAdmins(adminsRepositoryImpl);
  const putAdminsUseCase = new PutAdmins(adminsRepositoryImpl);
  const deleteAdminsUseCase = new DeleteAdmins(adminsRepositoryImpl);

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
