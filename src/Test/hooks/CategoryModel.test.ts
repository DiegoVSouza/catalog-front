import { renderHook, act, WaitForNextUpdate } from '@testing-library/react-hooks';
import CategoryModel from '../../main/hooks/CategoryModel';
import * as GetCategorysModule from '../../Domain/UseCase/Category/GetCategorys';
import * as PostCategorysModule from '../../Domain/UseCase/Category/PostCategorys';
import * as PutCategorysModule from '../../Domain/UseCase/Category/PutCategorys';
import * as DeleteCategorysModule from '../../Domain/UseCase/Category/DeleteCategorys';
import { CategoryPost, CategoryPut } from '../../Domain/Model/Category';


let CategorysData = [
    {
        id: "1",
        title: "CategoryTittle 01",
        description: "categoryDescription 01",
        ownerId: "1",
    },
    {
        id: "2",
        title: "CategoryTittle 02",
        description: "categoryDescription 02",
        ownerId: "2",
    },
];

jest.mock('../../Domain/UseCase/Category/GetCategorys', () => ({
    GetCategorys: jest.fn().mockImplementation(() => ({
        invoke: async () => CategorysData
    })),
}));

jest.mock('../../Domain/UseCase/Category/PostCategorys', () => ({
    PostCategorys: jest.fn().mockImplementation(() => ({
        invoke: async (data: CategoryPost) => {
            const newCategory = {
                id: "3",
                title: data.title,
                description: data.description,
                ownerId: data.ownerId,
            };
            CategorysData.push(newCategory);
            return newCategory;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Category/PutCategorys', () => ({
    PutCategorys: jest.fn().mockImplementation(() => ({
        invoke: async (data: CategoryPut) => {
            const editCategory = CategorysData.find(item => item.id === data.id);
            if (editCategory) {
                if (data.title) editCategory.title = data.title;
                if (data.description) editCategory.description = data.description;
                if (data.ownerId) editCategory.ownerId = data.ownerId;
            }
            return editCategory;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Category/DeleteCategorys', () => ({
    DeleteCategorys: jest.fn().mockImplementation(() => ({
        invoke: async (id: string) => {
            const deleteCategory = CategorysData.find(item => item.id === id);
            CategorysData = CategorysData.filter(item => item.id !== id);
            return deleteCategory;
        }
    })),
}));

let categoryModel: ReturnType<typeof CategoryModel>;
let wait: WaitForNextUpdate;

beforeAll(() => {
    const { result, waitForNextUpdate } = renderHook(() => CategoryModel());
    categoryModel = result.current;
    wait = waitForNextUpdate
});

describe('categoryModel', () => {
    it('deve buscar os CategoryTittles corretamente', async () => {
        const getCategorysSpy = jest.spyOn(GetCategorysModule, 'GetCategorys');
        await act(async () => {
            await categoryModel.getCategorys()
        });
        wait().then(() => {
            expect(getCategorysSpy).toHaveBeenCalled();
            expect(categoryModel.Categorys).toHaveLength(2);
            expect(categoryModel.Categorys[0].id).toBe('1');
            expect(categoryModel.Categorys[1].id).toBe('2');
        })

    });

    it('deve alterar o Category selecionado corretamente', () => {
        const onChangeValueSpy = jest.spyOn(categoryModel, 'onChangeValue');
        act(() => {
            categoryModel.onChangeValue('1');
        });
        wait().then(() => {
            expect(onChangeValueSpy).toHaveBeenCalledWith('1');
            expect(categoryModel.Category).toBeDefined();
            expect(categoryModel.Category!.id).toBe('1');
        })
    });

    it('deve adicionar um novo Category corretamente', async () => {
        const postCategorysSpy = jest.spyOn(PostCategorysModule, 'PostCategorys');
        await act(async () => {
            await categoryModel.postCategorys({
                title: 'CategoryTittle 03',
                description: "categoryDescription 03",
                ownerId: "3"
            });
        });
        wait().then(() => {
            expect(postCategorysSpy).toHaveBeenCalled();
            expect(categoryModel.Categorys).toHaveLength(3);
        })
    });

    it('deve atualizar um Category corretamente', async () => {
        const putCategorysSpy = jest.spyOn(PutCategorysModule, 'PutCategorys');
        const editCategory = {
            id: "3",
            email: 'CategoryTittle edit',
            description: "categoryDescription edit",
            ownerId: "4",
        };
        await act(async () => {
            await categoryModel.putCategorys(editCategory);
        });
        wait().then(() => {
            expect(putCategorysSpy).toHaveBeenCalled();
            expect(categoryModel.Category).toBe(categoryModel.Categorys.find(item=>item.id === editCategory.id));
        })
    });

    it('deve deletar um Category corretamente', async () => {
        const deleteCategorysSpy = jest.spyOn(DeleteCategorysModule, 'DeleteCategorys');
        await act(async () => {
            await categoryModel.deleteCategorys('1');
        });
        wait().then(() => {
            expect(deleteCategorysSpy).toHaveBeenCalled();
            expect(categoryModel.Categorys).toHaveLength(1);
            expect(categoryModel.Categorys[0].id).toBe('2');
        })
    });
});
