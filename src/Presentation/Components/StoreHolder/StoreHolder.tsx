import { useEffect } from 'react';
import './StoreHolder.css'
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { Store } from '../../../Domain/Model/Store';
import { FiEdit2 } from "react-icons/fi";
import { TfiTrash } from "react-icons/tfi";
import StoreModel from '../../../main/hooks/StoreModel';
import Notification from '../Notification/Notification';
interface StoreHolderInterface {
  store: Store
}

export default function StoreHolder({ store }: StoreHolderInterface) {

  const { deleteStores } = StoreModel()

  const handleDelete = async (id: string) => {
    if (await Notification.confirm("Tem certeza que quer deletar essa loja?")) {
      deleteStores(id)
    }
  }

  return (
    <Box className="storeHolder" padding={['0.5rem 0.75rem', '0.75rem 1rem', '1rem 1.5rem']} w='auto' height='10rem'>
      <Image alt={`'logo da ${store.name}`} src={store.file} />
      <Flex alignItems='center'>
        <Text><strong>Nome:</strong> {store.name}</Text>
        <Text><strong>Email:</strong> {store.email}</Text>
      </Flex>
      <Flex>
        <Button colorScheme='yellow'><FiEdit2 /> Editar</Button>
        <Button onClick={() => handleDelete(store.id)} colorScheme='red'><TfiTrash /> Excluir</Button>
      </Flex>
    </Box>
  );
}
