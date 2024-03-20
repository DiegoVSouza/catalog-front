import { AdminPost, AdminPut } from "../../Domain/Model/Admin";
import { api } from "../Services/api";
import AdminDataSource from "../DataSource/AdminDataSource";
import { AdminAPIEntity } from "../Entity/AdminAPIEntity";

export default class AdminAPIDataSourceImpl implements AdminDataSource {
  async getAdmins(): Promise<AdminAPIEntity[]> {
    try {
      const { data } = await api.get('/api/v1/admin')
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return [] as AdminAPIEntity[];
    }
  }

  async postAdmins(postData: AdminPost): Promise<AdminAPIEntity> {
    try {
      const { data } = await api.post('/api/v1/admin', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as AdminAPIEntity;
    }
  }
  async putAdmins(putData: AdminPut): Promise<AdminAPIEntity> {
    try {
      const { data } = await api.put('/api/v1/admin', putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as AdminAPIEntity;
    }
  }
  async deleteAdmins(adminId:string): Promise<AdminAPIEntity> {
    try {
      const { data } = await api.delete(`/api/v1/admin/${adminId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as AdminAPIEntity;
    }
  }



}
