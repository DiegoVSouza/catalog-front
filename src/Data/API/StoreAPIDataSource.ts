import { StorePost, StorePut } from "../../Domain/Model/Store";
import { api } from "../Services/api";
import StoreDataSource from "../DataSource/StoreDataSource";
import { StoreAPIEntity } from "../Entity/StoreAPIEntity";


export default class StoreAPIDataSourceImpl implements StoreDataSource {
  async getStores(): Promise<StoreAPIEntity[]> {
    try {
      const { data } = await api.get('/api/v1/store')
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return [] as StoreAPIEntity[];
    }
  }

  async postStores(postData: StorePost): Promise<StoreAPIEntity> {
    try {
      const { data } = await api.post('/api/v1/store', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as StoreAPIEntity;
    }
  }
  async putStores(putData: StorePut): Promise<StoreAPIEntity> {
    try {
      const { data } = await api.put(`/api/v1/store/${putData.id}`, putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as StoreAPIEntity;
    }
  }
  async deleteStores(StoreId:string): Promise<StoreAPIEntity> {
    try {
      const { data } = await api.delete(`/api/v1/store/${StoreId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as StoreAPIEntity;
    }
  }



}
