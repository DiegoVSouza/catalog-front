import { ProductPost, ProductPut } from "../../Domain/Model/Product";
import { api } from "../Services/api";
import ProductDataSource from "../DataSource/ProductDataSource";
import { ProductAPIEntity } from "../Entity/ProductAPIEntity";


export default class ProductAPIDataSourceImpl implements ProductDataSource {
  async getProducts(): Promise<ProductAPIEntity[]> {
    try {
      const { data } = await api.get('/api/v1/Product')
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return [] as ProductAPIEntity[];
    }
  }

  async postProducts(postData: ProductPost): Promise<ProductAPIEntity> {
    try {
      const { data } = await api.post('/api/v1/Product', postData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as ProductAPIEntity;
    }
  }
  async putProducts(putData: ProductPut): Promise<ProductAPIEntity> {
    try {
      const { data } = await api.put(`/api/v1/Product/${putData.id}`, putData)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as ProductAPIEntity;
    }
  }
  async deleteProducts(ProductId:string): Promise<ProductAPIEntity> {
    try {
      const { data } = await api.delete(`/api/v1/Product/${ProductId}`)
      return data;
    } catch (error: any) {
      console.log(error.response.data)
      return {} as ProductAPIEntity;
    }
  }



}
