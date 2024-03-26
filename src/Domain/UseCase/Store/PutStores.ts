import { Store, StorePut } from "../../Model/Store";
import { StoreRepository } from "../../Repository/StoreRepository";

export interface PutStoresUseCase {
  invoke: (data:StorePut) => Promise<Store>;
}

export class PutStores implements PutStoresUseCase {
  private storeRepo: StoreRepository;
  constructor(_storeRepo: StoreRepository) {
    this.storeRepo = _storeRepo;
  }

  async invoke(data:StorePut) {
    return this.storeRepo.putStores(data);
  }
}
