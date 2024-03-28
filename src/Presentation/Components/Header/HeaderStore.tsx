import { useEffect } from "react";
import './Header.css'
import { Button, Flex, IconButton, Image, ListItem, Text, UnorderedList, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import logo from '../../assets/images/logo.png'
import Sidebar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
export default function Header() {
    const [isMobile] = useMediaQuery("(min-width: 768px)");
    const history = useNavigate()
    return (
        <nav>
            <UnorderedList padding='1rem'>
                {
                    isMobile ?
                        <>
                            <ListItem cursor='pointer' onClick={()=>history('/home')}><Image src={logo} w='4rem' /></ListItem>
                            <Flex gap='1rem'>
                                <ListItem><Button variant='link' onClick={() => history('/login/')}>To do</Button></ListItem>
                                <ListItem><Button variant='link' onClick={() => history('/home/')}>Pratos</Button></ListItem>
                            </Flex>

                            <ListItem><Button textAlign='center'><CiCirclePlus />Adicionar Prato</Button></ListItem>
                        </>
                        :

                        <>
                            <Sidebar />
                            <ListItem><Button textAlign='center'><CiCirclePlus />Adicionar Prato</Button></ListItem>
                        </>

                }

            </UnorderedList>
        </nav>
    );
}
