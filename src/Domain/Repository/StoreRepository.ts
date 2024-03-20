import { Store, StorePost, StorePut } from "../Model/Store";

export interface StoreRepository {
  getStores(): Promise<Store[]>;
  postStores(data:StorePost): Promise<Store>;
  putStores(data:StorePut): Promise<Store>;
  deleteStores(id:string): Promise<Store>;
}
