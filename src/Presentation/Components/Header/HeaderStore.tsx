import './Header.css'
import { Button, Flex, IconButton, Image, ListItem, Text, UnorderedList, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import logo from '../../assets/images/logo.png'
import Sidebar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import { IsMobile } from "../../../utils/IsMobile";
import ToggleColorButton from '../ToggleColorButton/ToggleColorButton';

export default function Header() {
    const history = useNavigate()

    const renderHeader = () => {
        if (IsMobile())
            return (<>
                <Flex>
                    <ListItem cursor='pointer' onClick={() => history('/home')}><Image src={logo} w='4rem' /></ListItem>
                    <ToggleColorButton />
                </Flex>
                <Flex gap='1rem'>
                    <ListItem><Button variant='link' onClick={() => history('/login/')}>To do</Button></ListItem>
                    <ListItem><Button variant='link' onClick={() => history('/home/')}>Pratos</Button></ListItem>
                </Flex>

                <ListItem><Button textAlign='center'><CiCirclePlus />Adicionar Prato</Button></ListItem>
            </>)
        else
            return (<>
                <Sidebar />
                <ListItem><Button textAlign='center'><CiCirclePlus />Adicionar Prato</Button></ListItem>
            </>)
    }
    return (
        <nav>
            <UnorderedList padding='1rem'>
                {renderHeader()}
            </UnorderedList>
        </nav>
    );
}
