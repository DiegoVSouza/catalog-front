import { Store } from "../../Model/Store";
import { StoreRepository } from "../../Repository/StoreRepository";

export interface DeleteStoresUseCase {
  invoke: (id:string) => Promise<Store>;
}

export class DeleteStores implements DeleteStoresUseCase {
  private storeRepo: StoreRepository;
  constructor(_storeRepo: StoreRepository) {
    this.storeRepo = _storeRepo;
  }

  async invoke(id:string) {
    return this.storeRepo.deleteStores(id);
  }
}
