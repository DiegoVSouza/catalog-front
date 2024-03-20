import { StorePost, StorePut } from "../../Domain/Model/Store";
import { StoreAPIEntity } from "../Entity/StoreAPIEntity";

export default interface StoreDataSource {
  getStores(): Promise<StoreAPIEntity[]>;
  postStores(data:StorePost): Promise<StoreAPIEntity>;
  putStores(data:StorePut): Promise<StoreAPIEntity>;
  deleteStores(id:string): Promise<StoreAPIEntity>;
}
