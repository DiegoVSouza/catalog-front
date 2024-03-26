import { useEffect, useState } from "react";
import { Store, StorePost, StorePut } from "../../Domain/Model/Store";
import { StoreRepositoryImpl } from "../../Data/Repository/StoreRepositoryImpl";
import { GetStores } from "../../Domain/UseCase/Store/GetStores";
import { PostStores } from "../../Domain/UseCase/Store/PostStores";
import { PutStores } from "../../Domain/UseCase/Store/PutStores";
import { DeleteStores } from "../../Domain/UseCase/Store/DeleteStores";
import StoreAPIDataSourceImpl from "../../Data/API/StoreAPIDataSource";

export default function StoreModel() {
  const [Stores, setStores] = useState<Store[]>([]);
  const [Store, setStore] = useState<Store>();

  const storesDataSourceImpl = new StoreAPIDataSourceImpl();
  const storesRepositoryImpl = new StoreRepositoryImpl(storesDataSourceImpl);

  const getStoresUseCase = new GetStores(storesRepositoryImpl);
  const postStoresUseCase = new PostStores(storesRepositoryImpl);
  const putStoresUseCase = new PutStores(storesRepositoryImpl);
  const deleteStoresUseCase = new DeleteStores(storesRepositoryImpl);

  async function getStores() {
    setStores(await getStoresUseCase.invoke());
  }
  async function postStores(data:StorePost) {
    setStore(await postStoresUseCase.invoke(data));
  }
  async function putStores(data:StorePut) {
    setStore(await putStoresUseCase.invoke(data));
  }
  async function deleteStores(id:string) {
    setStore(await deleteStoresUseCase.invoke(id));
    await getStores()
  }

  function onChangeValue(id: String) {
    let Store = Stores.find(item=> item.id === id)
    setStore(Store);
  }

  return {
    getStores,
    postStores,
    putStores,
    deleteStores,
    onChangeValue,
    Stores,
    Store
  };
}
