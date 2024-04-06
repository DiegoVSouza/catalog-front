import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Creators as Auth } from '../../../store/modules/authentication/actions'
import { Box, Button, Flex, FormControl, Image, Text, useColorMode } from "@chakra-ui/react";
import { api } from '../../../Data/Services/api';
import { AdminStore } from '../../../Domain/Model/Admin';
import * as yup from "yup";
import { Login } from '../../../Domain/Model/Token';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from '../../Components/Input/InputComponent';
import logo from '../../assets/images/logo.png'
import './LoginView.css'

const loginSchema = yup
    .object({
        email: yup.string().required("Informe seu email").email("Informe um email valido"),
        password: yup.string().required("Informe sua senaha"),
    })
    .required();

export default function LoginPage() {
    const dispatch = useDispatch();
    const history = useNavigate()

    const { admin } = useSelector((store: AdminStore) => store);
    const { colorMode } = useColorMode();

    const {
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<Login>({
        resolver: yupResolver(loginSchema),
    });


    const SubmitLogin = (data: Login) => {
        console.log(data)
        // dispatch(Auth.loginRequest(data.email, data.password))
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
        <main>
            <Flex className='FormContainer' direction='column' as='section' gap='2rem' w='100%'
                padding='1rem 1.5rem' justifyContent='center' align='center' alignItems='center' >
                <Flex>
                    <Image  src={logo} w='5rem' />
                    <Text color='white' fontWeight='bold' fontSize='3rem'> Catalog </Text>
                </Flex>
                <Box as='article' background={colorMode === "light" ? "#f0f0f5" : "#2E2E2E"} padding='2rem' borderRadius='0.5rem' boxShadow='-8px 10px 5px 0px rgba(0,0,0,0.45)' w={['90%', '80%', '40%']} >
                    <form onSubmit={handleSubmit(SubmitLogin)}>
                        <FormControl>
                            <InputComponent labelName='Login' inputName='email' register={register} errors={errors} />
                            <InputComponent labelName='Senha' inputName='password' register={register} errors={errors} />
                            <Button type='submit' w='100%' mt='0.5rem' colorScheme='red'> Fazer Login</Button>
                        </FormControl>
                    </form>
                </Box>
            </Flex>
        </main>
    )
}