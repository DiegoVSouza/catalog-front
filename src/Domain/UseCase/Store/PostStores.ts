import { Store, StorePost } from "../../Model/Store";
import { StoreRepository } from "../../Repository/StoreRepository";

export interface PostStoresUseCase {
  invoke: (data:StorePost) => Promise<Store>;
}

export class PostStores implements PostStoresUseCase {
  private storeRepo: StoreRepository;
  constructor(_storeRepo: StoreRepository) {
    this.storeRepo = _storeRepo;
  }

  async invoke(data:StorePost) {
    return this.storeRepo.postStores(data);
  }
}
