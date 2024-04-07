import { useEffect } from 'react';
import './StoreForm.css'
import {
  Box, Flex, Text, Image, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { StorePost } from '../../../Domain/Model/Store';
import { FiEdit2 } from "react-icons/fi";
import { TfiTrash } from "react-icons/tfi";
import StoreModel from '../../../main/hooks/StoreModel';
import Notification from '../Notification/Notification';
import InputComponent from '../Input/InputComponent';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxComponent from '../Input/CheckBoxComponent';

interface StoreFormInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  edit: boolean;
}

const storeSchema = yup
  .object({
    email: yup.string().email('Digite um e-mail válido').required('Digite um e-mail válido'),
    name: yup.string().required('Digite um nome válido'),
    neighborhood: yup.string().required('Digite um bairro válido'),
    street: yup.string().required('Digite um endereço válido'),
    number: yup.number().required('Digite um número válido'),
    city: yup.string().required('Digite uma cidade válida'),
    state: yup.string().required('Digite um estado válido'),
    cep: yup.string().required('Digite um CEP válido'),
    phone: yup.string().required('Digite um telefone válido'),
    file: yup.string().required('Digite um arquivo válido'),
    password: yup.string().required('Digite uma senha válida'),
    roleId: yup.string().required('Digite um ID de função válido'),
    payment_method: yup.object().shape({
      creditcard: yup.boolean().required('Selecione uma opção de cartão de crédito'),
      money: yup.boolean().required('Selecione uma opção de dinheiro'),
      pix: yup.boolean().required('Selecione uma opção PIX')
    })
  })
  .required();

export default function StoreForm({ isOpen, onClose, onOpen,edit = false }: StoreFormInterface) {

  const { deleteStores } = StoreModel()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<StorePost>({
    resolver: yupResolver(storeSchema),
  });

  const submitStore = (data: StorePost) => {
    console.log(data)
  }

  return (
    <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{edit ? 'Editar Loja' : 'Criar Nova Loja' }</ModalHeader>
        
        <ModalCloseButton />
        <form onSubmit={handleSubmit(submitStore)}>
          <ModalBody>
            <Flex flexWrap='wrap'>
              <InputComponent labelName="Email" inputName="email" register={register} errors={errors} />
              <InputComponent labelName="Name" inputName="name" register={register} errors={errors} />
              <InputComponent labelName="Neighborhood" inputName="neighborhood" register={register} errors={errors} />
              <InputComponent labelName="Street" inputName="street" register={register} errors={errors} />
              <InputComponent labelName="Number" inputName="number" register={register} errors={errors} />
              <InputComponent labelName="City" inputName="city" register={register} errors={errors} />
              <InputComponent labelName="State" inputName="state" register={register} errors={errors} />
              <InputComponent labelName="CEP" inputName="cep" register={register} errors={errors} />
              <InputComponent labelName="Phone" inputName="phone" register={register} errors={errors} />
              <InputComponent labelName="File" inputName="file" register={register} errors={errors} />
              <InputComponent labelName="Password" inputName="password" register={register} errors={errors} />
              <InputComponent labelName="Role ID" inputName="roleId" register={register} errors={errors} />
              {/* <InputComponent labelName="Credit Card" inputName="payment_method.creditcard" register={register} errors={errors} />
              <InputComponent labelName="Money" inputName="payment_method.money" register={register} errors={errors} />
              <InputComponent labelName="PIX" inputName="payment_method.pix" register={register} errors={errors} /> */}

              <CheckboxComponent labelName="Credit Card" inputName="payment_method.creditcard" register={register}/>
              <CheckboxComponent labelName="Money" inputName="payment_method.money" register={register}/>
              <CheckboxComponent labelName="PIX" inputName="payment_method.pix" register={register} />
           
            </Flex>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' type='submit'>Criar Loja</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
