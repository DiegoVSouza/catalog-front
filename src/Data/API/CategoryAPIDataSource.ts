import { CategoryPost, CategoryPut } from "../../Domain/Model/Category";
import { api } from "../Services/api";
import CategoryDataSource from "../DataSource/CategoryDataSource";
import { CategoryAPIEntity } from "../Entity/CategoryAPIEntity";

export default class CategoryAPIDataSourceImpl implements CategoryDataSource {
  async getCategorys(): Promise<CategoryAPIEntity[]> {
    try {
      const { data } = await api.get('/api/v1/category')
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return [] as CategoryAPIEntity[];
    }
  }

  async postCategorys(postData: CategoryPost): Promise<CategoryAPIEntity> {
    try {
      const { data } = await api.post('/api/v1/category', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as CategoryAPIEntity;
    }
  }
  async putCategorys(putData: CategoryPut): Promise<CategoryAPIEntity> {
    try {
      const { data } = await api.put(`/api/v1/category/${putData.id}`, putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as CategoryAPIEntity;
    }
  }
  async deleteCategorys(categoryId:string): Promise<CategoryAPIEntity> {
    try {
      const { data } = await api.delete(`/api/v1/category/${categoryId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as CategoryAPIEntity;
    }
  }



}
