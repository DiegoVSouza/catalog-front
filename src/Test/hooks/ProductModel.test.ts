import { renderHook, act, WaitForNextUpdate } from '@testing-library/react-hooks';
import ProductModel from '../../main/hooks/ProductModel';
import * as GetProductsModule from '../../Domain/UseCase/Product/GetProducts';
import * as PostProductsModule from '../../Domain/UseCase/Product/PostProducts';
import * as PutProductsModule from '../../Domain/UseCase/Product/PutProducts';
import * as DeleteProductsModule from '../../Domain/UseCase/Product/DeleteProducts';
import { ProductPost, ProductPut } from '../../Domain/Model/Product';

let ProductsData = [
    {
        id: "1",
        title: "Title 1",
        description: "description 1",
        price: 0,
        ownerId: '1',
        categoryId: '1',
        category: {
            id: '1',
            title: 'Category Title Test',
            description: 'Description Category Test',
            ownerId: '1'
        },
        image_url: '1'
    },
    {
        id: "2",
        title: "Title 1",
        description: "description 1",
        price: 0,
        ownerId: '1',
        categoryId: '1',
        category: {
            id: '1',
            title: 'Category Title Test',
            description: 'Description Category Test',
            ownerId: '1'
        },
        image_url: '1'
    }
];

jest.mock('../../Domain/UseCase/Product/GetProducts', () => ({
    GetProducts: jest.fn().mockImplementation(() => ({
        invoke: async () => ProductsData
    })),
}));

jest.mock('../../Domain/UseCase/Product/PostProducts', () => ({
    PostProducts: jest.fn().mockImplementation(() => ({
        invoke: async (data: ProductPost) => {
            const newProduct = {
                id: "3",
                title: data.title,
                description: data.description,
                price: 0,
                ownerId: data.ownerId,
                categoryId: data.categoryId,
                category: {
                    id: '3',
                    title: 'Category Title Test',
                    description: 'Description Category Test',
                    ownerId: '3'
                },
                image_url: data.image_url
            }
            ProductsData.push(newProduct);
            return newProduct;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Product/PutProducts', () => ({
    PutProducts: jest.fn().mockImplementation(() => ({
        invoke: async (data: ProductPut) => {
            const editProduct = ProductsData.find(item => item.id === data.id);
            if (editProduct) {
                if (data.title) editProduct.title = data.title;
                if (data.description) editProduct.description = data.description;
                if (data.price) editProduct.price = data.price;
                if (data.categoryId) editProduct.categoryId = data.categoryId;
            }
            return editProduct;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Product/DeleteProducts', () => ({
    DeleteProducts: jest.fn().mockImplementation(() => ({
        invoke: async (id: string) => {
            const deleteProduct = ProductsData.find(item => item.id === id);
            ProductsData = ProductsData.filter(item => item.id !== id);
            return deleteProduct;
        }
    })),
}));

let productModel: ReturnType<typeof ProductModel>;
let wait: WaitForNextUpdate;

beforeAll(() => {
    const { result, waitForNextUpdate } = renderHook(() => ProductModel());
    productModel = result.current;
    wait = waitForNextUpdate
});

describe('productModel', () => {
    it('deve buscar os Productistradores corretamente', async () => {
        const getProductsSpy = jest.spyOn(GetProductsModule, 'GetProducts');
        await act(async () => {
            await productModel.getProducts()
        });
        wait().then(() => {
            expect(getProductsSpy).toHaveBeenCalled();
            expect(productModel.Products).toHaveLength(2);
            expect(productModel.Products[0].id).toBe('1');
            expect(productModel.Products[1].id).toBe('2');
        })

    });

    it('deve alterar o Product selecionado corretamente', () => {
        const onChangeValueSpy = jest.spyOn(productModel, 'onChangeValue');
        act(() => {
            productModel.onChangeValue('1');
        });
        wait().then(() => {
            expect(onChangeValueSpy).toHaveBeenCalledWith('1');
            expect(productModel.Product).toBeDefined();
            expect(productModel.Product!.id).toBe('1');
        })
    });

    it('deve adicionar um novo Product corretamente', async () => {
        const postProductsSpy = jest.spyOn(PostProductsModule, 'PostProducts');
        await act(async () => {
            await productModel.postProducts({
                title: "Title 3",
                description: "description 3",
                price: 0,
                ownerId: '3',
                categoryId: '3',
                image_url: '3'
            });
        });
        wait().then(() => {
            expect(postProductsSpy).toHaveBeenCalled();
            expect(productModel.Products).toHaveLength(3);
        })
    });

    it('deve atualizar um Product corretamente', async () => {
        const putProductsSpy = jest.spyOn(PutProductsModule, 'PutProducts');
        const editProduct = {
            id: "3",
            title: "Title 4",
            description: "description 4",
            price: 1,
            categoryId: '4',
        };
        await act(async () => {
            await productModel.putProducts(editProduct);
        });
        wait().then(() => {
            expect(putProductsSpy).toHaveBeenCalled();
            expect(productModel.Product).toBe(productModel.Products.find(item => item.id === editProduct.id));
        })
    });

    it('deve deletar um Product corretamente', async () => {
        const deleteProductsSpy = jest.spyOn(DeleteProductsModule, 'DeleteProducts');
        await act(async () => {
            await productModel.deleteProducts('1');
        });
        wait().then(() => {
            expect(deleteProductsSpy).toHaveBeenCalled();
            expect(productModel.Products).toHaveLength(1);
            expect(productModel.Products[0].id).toBe('2');
        })
    });
});
