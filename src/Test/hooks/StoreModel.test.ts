import { renderHook, act, WaitForNextUpdate } from '@testing-library/react-hooks';
import StoreModel from '../../main/hooks/StoreModel';
import * as GetStoresModule from '../../Domain/UseCase/Store/GetStores';
import * as PostStoresModule from '../../Domain/UseCase/Store/PostStores';
import * as PutStoresModule from '../../Domain/UseCase/Store/PutStores';
import * as DeleteStoresModule from '../../Domain/UseCase/Store/DeleteStores';
import { StorePost, StorePut } from '../../Domain/Model/Store';

let StoresData = [
    {
        id: "1",
        email: "any@mail.com",
        name: "Pizza House",
        neighborhood: "Bairro Saboroso",
        street: "Rua das Pizzas",
        number: 352,
        city: "Aurora",
        state: "CE",
        cep: "12345-678",
        phone: "(11) 9876-5432",
        file: "https://example.com/profile.jpg",
        password: "password",
        role: {
            id: "1",
            value: "ADMIN",
            label: "Role de acesso geral a todas as funcionalidades do sistema."
        },
        categories: [
            {
                id: "1",
                title: "title",
                description: "Descrição da categoria",
                ownerId: "1"
            }
        ],
        products: [
            {
                id: "1",
                title: "Nome",
                description: "Descrição da categoria",
                price: 10,
                ownerId: "65bb7e942d26288721fdbb32",
                categoryId: "65bb7e942d26288721fdbb32",
                category: {
                    id: "1",
                    title: "title",
                    description: "Descrição da categoria",
                    ownerId: "1"
                },
                image_url: "https://catalog-beta-images.s3.us-east-2.amazonaws.com/image.png"
            }
        ],
        week: [
            {
                day: "MONDAY",
                start: "17:00",
                end: "23:00",
                opened: true,
                ownerId: "65bb7e942d26288721fdbb32"
            }
        ],
        payment_method: {
            creditcard: false,
            money: true,
            pix: true
        }
    },
    {
        id: "2",
        email: "any@mail.com",
        name: "Pizza House",
        neighborhood: "Bairro Saboroso",
        street: "Rua das Pizzas",
        number: 352,
        city: "Aurora",
        state: "CE",
        cep: "12345-678",
        phone: "(11) 9876-5432",
        file: "https://example.com/profile.jpg",
        password: "password",
        role: {
            id: "2",
            value: "ADMIN",
            label: "Role de acesso geral a todas as funcionalidades do sistema."
        },
        categories: [
            {
                id: "2",
                title: "title",
                description: "Descrição da categoria",
                ownerId: "2"
            }
        ],
        products: [
            {
                id: "2",
                title: "Nome",
                description: "Descrição da categoria",
                price: 10,
                ownerId: "65bb7e942d26288721fdbb32",
                categoryId: "65bb7e942d26288721fdbb32",
                category: {
                    id: "2",
                    title: "title",
                    description: "Descrição da categoria",
                    ownerId: "2"
                },
                image_url: "https://catalog-beta-images.s3.us-east-2.amazonaws.com/image.png"
            }
        ],
        week: [
            {
                day: "MONDAY",
                start: "17:00",
                end: "23:00",
                opened: true,
                ownerId: "65bb7e942d26288721fdbb32"
            }
        ],
        payment_method: {
            creditcard: false,
            money: true,
            pix: true
        }
    }
];

jest.mock('../../Domain/UseCase/Store/GetStores', () => ({
    GetStores: jest.fn().mockImplementation(() => ({
        invoke: async () => StoresData
    })),
}));

jest.mock('../../Domain/UseCase/Store/PostStores', () => ({
    PostStores: jest.fn().mockImplementation(() => ({
        invoke: async (data: StorePost) => {
            const newStore = {
                id: "3",
                email: "any@mail.com",
                name: "Pizza House",
                neighborhood: "Bairro Saboroso",
                street: "Rua das Pizzas",
                number: 352,
                city: "Aurora",
                state: "CE",
                cep: "12345-678",
                phone: "(11) 9876-5432",
                file: "https://example.com/profile.jpg",
                password: "password",
                role: {
                    id: "3",
                    value: "ADMIN",
                    label: "Role de acesso geral a todas as funcionalidades do sistema."
                },
                categories: [
                    {
                        id: "3",
                        title: "title",
                        description: "Descrição da categoria",
                        ownerId: "3"
                    }
                ],
                products: [
                    {
                        id: "3",
                        title: "Nome",
                        description: "Descrição da categoria",
                        price: 10,
                        ownerId: "65bb7e942d26288721fdbb32",
                        categoryId: "65bb7e942d26288721fdbb32",
                        category: {
                            id: "1",
                            title: "title",
                            description: "Descrição da categoria",
                            ownerId: "1"
                        },
                        image_url: "https://catalog-beta-images.s3.us-east-2.amazonaws.com/image.png"
                    }
                ],
                week: [
                    {
                        day: "MONDAY",
                        start: "17:00",
                        end: "23:00",
                        opened: true,
                        ownerId: "65bb7e942d26288721fdbb32"
                    }
                ],
                payment_method: {
                    creditcard: false,
                    money: true,
                    pix: true
                }
            }

            StoresData.push(newStore);
            return newStore;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Store/PutStores', () => ({
    PutStores: jest.fn().mockImplementation(() => ({
        invoke: async (data: StorePut) => {
            const editStore = StoresData.find(item => item.id === data.id);
            if (editStore) {
                if (data.name) editStore.name = data.name;
                if (data.cep) editStore.cep = data.cep;
                if (data.email) editStore.email = data.email;
                if (data.neighborhood) editStore.neighborhood = data.neighborhood;
                if (data.street) editStore.street = data.street;
                if (data.state) editStore.state = data.state;
                if (data.city) editStore.city = data.city;
                if (data.phone) editStore.phone = data.phone;
                if (data.file) editStore.file = data.file;
                if (data.password) editStore.password = data.password;
                if (data.payment_method) editStore.payment_method = data.payment_method;
            }
            return editStore;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Store/DeleteStores', () => ({
    DeleteStores: jest.fn().mockImplementation(() => ({
        invoke: async (id: string) => {
            const deleteStore = StoresData.find(item => item.id === id);
            StoresData = StoresData.filter(item => item.id !== id);
            return deleteStore;
        }
    })),
}));

let storeModel: ReturnType<typeof StoreModel>;
let wait: WaitForNextUpdate;

beforeAll(() => {
    const { result, waitForNextUpdate } = renderHook(() => StoreModel());
    storeModel = result.current;
    wait = waitForNextUpdate
});

describe('storeModel', () => {
    it('deve buscar os Storeistradores corretamente', async () => {
        const getStoresSpy = jest.spyOn(GetStoresModule, 'GetStores');
        await act(async () => {
            await storeModel.getStores()
        });
        wait().then(() => {
            expect(getStoresSpy).toHaveBeenCalled();
            expect(storeModel.Stores).toHaveLength(2);
            expect(storeModel.Stores[0].id).toBe('1');
            expect(storeModel.Stores[1].id).toBe('2');
        })

    });

    it('deve alterar o Store selecionado corretamente', () => {
        const onChangeValueSpy = jest.spyOn(storeModel, 'onChangeValue');
        act(() => {
            storeModel.onChangeValue('1');
        });
        wait().then(() => {
            expect(onChangeValueSpy).toHaveBeenCalledWith('1');
            expect(storeModel.Store).toBeDefined();
            expect(storeModel.Store!.id).toBe('1');
        })
    });

    it('deve adicionar um novo Store corretamente', async () => {
        const postStoresSpy = jest.spyOn(PostStoresModule, 'PostStores');
        await act(async () => {
            await storeModel.postStores({
                email: "any@mail.com",
                name: "Pizza House",
                neighborhood: "Bairro Saboroso",
                street: "Rua das Pizzas",
                number: 352,
                city: "Aurora",
                state: "CE",
                cep: "12345-678",
                phone: "(11) 9876-5432",
                file: "https://example.com/profile.jpg",
                password: "password",
                roleId: "3",
                payment_method: {
                    creditcard: false,
                    money: true,
                    pix: true
                }
            });
        });
        wait().then(() => {
            expect(postStoresSpy).toHaveBeenCalled();
            expect(storeModel.Stores).toHaveLength(3);
        })
    });

    it('deve atualizar um Store corretamente', async () => {
        const putStoresSpy = jest.spyOn(PutStoresModule, 'PutStores');
        const editStore = {
            id: "3",
            email: "any@mail.com 2",
            name: "Pizza House 2",
            neighborhood: "Bairro Saboroso 2",
            street: "Rua das Pizzas 2",
            number: 1,
            city: "Aurora 2",
            state: "CE 2",
            cep: "12345-678 2",
            phone: "(11) 9876-5432 2 ",
            file: "https://example.com/profile.jpg 2",
            password: "password 2",
            roleId: "3",
            payment_method: {
                creditcard: false,
                money: true,
                pix: true
            }
        };
        await act(async () => {
            await storeModel.putStores(editStore);
        });
        wait().then(() => {
            expect(putStoresSpy).toHaveBeenCalled();
            expect(storeModel.Store).toBe(storeModel.Stores.find(item => item.id === editStore.id));
        })
    });

    it('deve deletar um Store corretamente', async () => {
        const deleteStoresSpy = jest.spyOn(DeleteStoresModule, 'DeleteStores');
        await act(async () => {
            await storeModel.deleteStores('1');
        });
        wait().then(() => {
            expect(deleteStoresSpy).toHaveBeenCalled();
            expect(storeModel.Stores).toHaveLength(1);
            expect(storeModel.Stores[0].id).toBe('2');
        })
    });
});
