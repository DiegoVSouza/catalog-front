import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Creators as Auth } from '../../../store/modules/authentication/actions'
import { Button } from "@chakra-ui/react";
import { api } from '../../../Data/Services/api';
import { Admin, AdminStore } from '../../../Domain/Model/Admin';


export default function Login() {
    const dispatch = useDispatch();
    const history = useNavigate()
    const { admin } = useSelector((store: AdminStore) => store);

    const handleSubmit = () => {
        let data = {
            email: "any@mail.com",
            password: "password"
        }
        dispatch(Auth.loginRequest(data.email, data.password))
    }

    const handleCreate = () => {
        let data = {
            email: "any@mail.com",
            name: "John Doe",
            password: "password",
            roleId: "65f9a9da5c118f17f40997f1"
        }
        api.post('/api/v1/admin', data).then((data) => {
            console.log(data)
        }).catch((error: any) => {
            console.log(error)
        })
    }
    return (
        <>
            <Button onClick={handleCreate}>criar</Button>
            <Button onClick={handleSubmit}>Logar</Button>
        </>
    )
}