import { render, fireEvent } from '@testing-library/react';
import AdminsModel from '../../Presentation/Components/Admin/AdminsModel';
import { AdminPost, AdminPut } from '../../Domain/Model/Admin';

let Admins = [
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
]

let AdminsBackup = Admins

jest.mock('../../Domain/UseCase/Admin/GetAdmins', () => ({
    GetAdmins: jest.fn().mockImplementation(() => ({
        invoke: async () => Admins,
    })),
}));

jest.mock('../../Domain/UseCase/Admin/PostAdmins', () => ({
    PostAdmins: jest.fn().mockImplementation((data: AdminPost) => ({
        invoke: async () => {
            let newAdmin = {
                id: '3',
                email: data.email,
                name: data.name,
                password: data.password,
                role: {
                    id: "1",
                    value: "ADMIN",
                    label: "Role de acesso geral a todas as funcionalidades do sistema."
                }
            }
            Admins.push(newAdmin)
            return newAdmin
        }
    })),
}));

jest.mock('../../Domain/UseCase/Admin/PutAdmins', () => ({
    PutAdmins: jest.fn().mockImplementation((data: AdminPut) => ({
        invoke: async () => ({
            id: data.id,
            email: data.email,
            name: data.name,
            password: data.password,
            role: {
                id: "1",
                value: "ADMIN",
                label: "Role de acesso geral a todas as funcionalidades do sistema."
            }
        })
    })),
}));

jest.mock('../../Domain/UseCase/Admin/DeleteAdmins', () => ({
    DeleteAdmins: jest.fn().mockImplementation((id: string) => ({
        invoke: async (id: string) => {
            let deleteAdmin = Admins.find(item => item.id === id)
            Admins = Admins.filter(item => item.id !== id)
            return deleteAdmin
        }
    })),
}));

let adminsModel: ReturnType<typeof AdminsModel>;

beforeEach(() => {
    adminsModel = AdminsModel();
});


afterAll(() => {
    Admins = AdminsBackup
})
describe('AdminsModel', () => {
    it('deve buscar os administradores corretamente', async () => {
        await adminsModel.getAdmins();
        expect(adminsModel.Admins).toHaveLength(2);
        expect(adminsModel.Admins[0].id).toBe('1');
        expect(adminsModel.Admins[1].id).toBe('2');
    });

    it('deve alterar o admin selecionado corretamente', () => {
        adminsModel.onChangeValue('1');
        expect(adminsModel.Admin).not.toBeUndefined()
        expect(adminsModel.Admin!.id).toBe('1');
    });

    it('deve adicionar um novo admin corretamente', async () => {
        await adminsModel.postAdmins({
            email: 'newAdmin@gmail.com',
            name: "John Doe",
            password: "password",
            roleId: "1"
        });
        expect(adminsModel.Admins).toHaveLength(3);
    });

    it('deve atualizar um admin corretamente', async () => {
        let editAdmin = {
            id: "3",
            email: 'newAdmin2@gmail.com',
            name: "Lenon Jhon",
            password: "password2",
        }
        await adminsModel.putAdmins(editAdmin);
        expect(adminsModel.Admin).toBe(editAdmin);
    });

    it('deve deletar um admin corretamente', async () => {
        await adminsModel.deleteAdmins('1');
        expect(adminsModel.Admins).toHaveLength(2);
        expect(adminsModel.Admins[0].id).toBe('2');
    });
});
