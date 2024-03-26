import { useEffect, useState } from "react";
import { Category, CategoryPost, CategoryPut } from "../../Domain/Model/Category";
import { CategoryRepositoryImpl } from "../../Data/Repository/CategoryRepositoryImpl";
import { GetCategorys } from "../../Domain/UseCase/Category/GetCategorys";
import { PostCategorys } from "../../Domain/UseCase/Category/PostCategorys";
import { PutCategorys } from "../../Domain/UseCase/Category/PutCategorys";
import { DeleteCategorys } from "../../Domain/UseCase/Category/DeleteCategorys";
import CategoryAPIDataSourceImpl from "../../Data/API/CategoryAPIDataSource";

export default function CategoryModel() {
  const [Categorys, setCategorys] = useState<Category[]>([]);
  const [Category, setCategory] = useState<Category>();

  const categorysDataSourceImpl = new CategoryAPIDataSourceImpl();
  const categorysRepositoryImpl = new CategoryRepositoryImpl(categorysDataSourceImpl);

  const getCategorysUseCase = new GetCategorys(categorysRepositoryImpl);
  const postCategorysUseCase = new PostCategorys(categorysRepositoryImpl);
  const putCategorysUseCase = new PutCategorys(categorysRepositoryImpl);
  const deleteCategorysUseCase = new DeleteCategorys(categorysRepositoryImpl);

  async function getCategorys() {
    setCategorys(await getCategorysUseCase.invoke());
  }
  async function postCategorys(data:CategoryPost) {
    setCategory(await postCategorysUseCase.invoke(data));
  }
  async function putCategorys(data:CategoryPut) {
    setCategory(await putCategorysUseCase.invoke(data));
  }
  async function deleteCategorys(id:string) {
    setCategory(await deleteCategorysUseCase.invoke(id));
    await getCategorys()
  }

  function onChangeValue(id: String) {
    let Category = Categorys.find(item=> item.id === id)
    setCategory(Category);
  }

  return {
    getCategorys,
    postCategorys,
    putCategorys,
    deleteCategorys,
    onChangeValue,
    Categorys,
    Category
  };
}
