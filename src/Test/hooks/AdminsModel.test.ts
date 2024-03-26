import { renderHook, act, WaitForNextUpdate } from '@testing-library/react-hooks';
import AdminModel from '../../main/hooks/AdminModel';
import * as GetAdminsModule from '../../Domain/UseCase/Admin/GetAdmins';
import * as PostAdminsModule from '../../Domain/UseCase/Admin/PostAdmins';
import * as PutAdminsModule from '../../Domain/UseCase/Admin/PutAdmins';
import * as DeleteAdminsModule from '../../Domain/UseCase/Admin/DeleteAdmins';
import { AdminPost, AdminPut } from '../../Domain/Model/Admin';


let adminsData = [
    {
        id: "1",
        email: "any@mail.com",
        name: "John Doe",
        password: "password",
        role: {
            id: "1",
            value: "ADMIN",
            label: "Role de acesso geral a todas as funcionalidades do sistema."
        }
    },
    {
        id: "2",
        email: "any@mail.com",
        name: "John Doe",
        password: "password",
        role: {
            id: "2",
            value: "ADMIN",
            label: "Role de acesso geral a todas as funcionalidades do sistema."
        }
    },
];

jest.mock('../../Domain/UseCase/Admin/GetAdmins', () => ({
    GetAdmins: jest.fn().mockImplementation(() => ({
        invoke: async () => adminsData
    })),
}));

jest.mock('../../Domain/UseCase/Admin/PostAdmins', () => ({
    PostAdmins: jest.fn().mockImplementation(() => ({
        invoke: async (data: AdminPost) => {
            const newAdmin = {
                id: '3',
                email: data.email,
                name: data.name,
                password: data.password,
                role: {
                    id: "1",
                    value: "ADMIN",
                    label: "Role de acesso geral a todas as funcionalidades do sistema."
                }
            };
            adminsData.push(newAdmin);
            return newAdmin;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Admin/PutAdmins', () => ({
    PutAdmins: jest.fn().mockImplementation(() => ({
        invoke: async (data: AdminPut) => {
            const editAdmin = adminsData.find(item => item.id === data.id);
            if (editAdmin) {
                if (data.name) editAdmin.name = data.name;
                if (data.password) editAdmin.password = data.password;
                if (data.email) editAdmin.email = data.email;
            }
            return editAdmin;
        }
    })),
}));

jest.mock('../../Domain/UseCase/Admin/DeleteAdmins', () => ({
    DeleteAdmins: jest.fn().mockImplementation(() => ({
        invoke: async (id: string) => {
            const deleteAdmin = adminsData.find(item => item.id === id);
            adminsData = adminsData.filter(item => item.id !== id);
            return deleteAdmin;
        }
    })),
}));

let adminModel: ReturnType<typeof AdminModel>;
let wait: WaitForNextUpdate;

beforeAll(() => {
    const { result, waitForNextUpdate } = renderHook(() => AdminModel());
    adminModel = result.current;
    wait = waitForNextUpdate
});

describe('AdminModel', () => {
    it('deve buscar os administradores corretamente', async () => {
        const getAdminsSpy = jest.spyOn(GetAdminsModule, 'GetAdmins');
        await act(async () => {
            await adminModel.getAdmins()
        });
        wait().then(() => {
            expect(getAdminsSpy).toHaveBeenCalled();
            expect(adminModel.Admins).toHaveLength(2);
            expect(adminModel.Admins[0].id).toBe('1');
            expect(adminModel.Admins[1].id).toBe('2');
        })

    });

    it('deve alterar o admin selecionado corretamente', () => {
        const onChangeValueSpy = jest.spyOn(adminModel, 'onChangeValue');
        act(() => {
            adminModel.onChangeValue('1');
        });
        wait().then(() => {
            expect(onChangeValueSpy).toHaveBeenCalledWith('1');
            expect(adminModel.Admin).toBeDefined();
            expect(adminModel.Admin!.id).toBe('1');
        })
    });

    it('deve adicionar um novo admin corretamente', async () => {
        const postAdminsSpy = jest.spyOn(PostAdminsModule, 'PostAdmins');
        await act(async () => {
            await adminModel.postAdmins({
                email: 'newAdmin@gmail.com',
                name: "John Doe",
                password: "password",
                roleId: "1"
            });
        });
        wait().then(() => {
            expect(postAdminsSpy).toHaveBeenCalled();
            expect(adminModel.Admins).toHaveLength(3);
        })
    });

    it('deve atualizar um admin corretamente', async () => {
        const putAdminsSpy = jest.spyOn(PutAdminsModule, 'PutAdmins');
        const editAdmin = {
            id: "3",
            email: 'newAdmin2@gmail.com',
            name: "Lenon Jhon",
            password: "password2",
        };
        await act(async () => {
            await adminModel.putAdmins(editAdmin);
        });
        wait().then(() => {
            expect(putAdminsSpy).toHaveBeenCalled();
            expect(adminModel.Admin).toBe(adminModel.Admins.find(item=>item.id === editAdmin.id));
        })
    });

    it('deve deletar um admin corretamente', async () => {
        const deleteAdminsSpy = jest.spyOn(DeleteAdminsModule, 'DeleteAdmins');
        await act(async () => {
            await adminModel.deleteAdmins('1');
        });
        wait().then(() => {
            expect(deleteAdminsSpy).toHaveBeenCalled();
            expect(adminModel.Admins).toHaveLength(1);
            expect(adminModel.Admins[0].id).toBe('2');
        })
    });
});
