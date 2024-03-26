import { Store } from "../../Model/Store";
import { StoreRepository } from "../../Repository/StoreRepository";

export interface GetStoresUseCase {
  invoke: () => Promise<Store[]>;
}

export class GetStores implements GetStoresUseCase {
  private storeRepo: StoreRepository;
  constructor(_storeRepo: StoreRepository) {
    this.storeRepo = _storeRepo;
  }

  async invoke() {
    return this.storeRepo.getStores();
  }
}
