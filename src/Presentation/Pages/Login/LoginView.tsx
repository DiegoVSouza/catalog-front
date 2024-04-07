import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Creators as Auth } from '../../../store/modules/authentication/actions'
import { Box, Button, Flex, FormControl, Image, Text, useColorMode } from "@chakra-ui/react";
import { api } from '../../../Data/Services/api';
import * as yup from "yup";
import { Login, UserStore } from '../../../Domain/Model/Token';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from '../../Components/Input/InputComponent';
import logo from '../../assets/images/logo.png'
import './LoginView.css'
import { useEffect, useState } from 'react';

const loginSchema = yup
    .object({
        email: yup.string().required("Informe seu email").email("Informe um email valido"),
        password: yup.string().required("Informe sua senaha"),
    })
    .required();

export default function LoginPage() {


    const dispatch = useDispatch();

    const { colorMode } = useColorMode();
    const history = useNavigate()

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

    const verifyError = () => {
        reset()
        setError('email', { message: "Email não validado" })
        setError('password', { message: "ou senha incorreta" })
    }

    const SubmitLogin = async (data: Login) => {
        console.log(data)
        dispatch(Auth.loginRequest(data.email, data.password, history, verifyError))
        verifyError()
    }

    return (
        <main className='loginMain'>
            <Flex className='FormContainer' direction='column' as='section' gap='2rem' w='100%'
                padding='1rem 1.5rem' justifyContent='center' align='center' alignItems='center' >

                <Flex>
                    <Image src={logo} w='5rem' />
                    <Text color='white' fontWeight='bold' fontSize='3rem'> Catalog </Text>
                </Flex>
                <Box as='article' background={colorMode === "light" ? "#f0f0f5" : "#2E2E2E"} padding='2rem' borderRadius='0.5rem' boxShadow='-8px 10px 5px 0px rgba(0,0,0,0.45)' w={['90%', '80%', '40%']} >
                    <form onSubmit={handleSubmit(SubmitLogin)}>
                        <FormControl>
                            <InputComponent labelName='Login' inputName='email' register={register} errors={errors} />
                            <InputComponent labelName='Senha' inputName='password' type='password' register={register} errors={errors} />
                            <Button type='submit' w='100%' mt='0.5rem' colorScheme='red'> Fazer Login</Button>
                        </FormControl>
                    </form>
                </Box>
            </Flex>
        </main>
    )
}