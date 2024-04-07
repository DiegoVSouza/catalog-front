import './Header.css'
import { Button, Flex, IconButton, Image, ListItem, Text, UnorderedList, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import logo from '../../assets/images/logo.png'
import Sidebar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import { IsMobile } from "../../../utils/IsMobile";
import ToggleColorButton from '../ToggleColorButton/ToggleColorButton';
import { AtavatarMenu } from '../Avatar/AvatarMenu';

export default function HeaderAdmin() {
    const history = useNavigate()

    const renderHeader = () => {
        if (IsMobile())
            return (<>
                <Flex>
                    {/* <ListItem cursor='pointer' onClick={() => history('/home')}><Image src={logo} w='4rem' /></ListItem> */}
                    <AtavatarMenu/>
                </Flex>
                <Flex gap='1rem'>
                    {/* <ListItem><Button variant='link' onClick={() => history('/login/')}>To do</Button></ListItem> */}
                    <ListItem><Button variant='link' onClick={() => history('/stores/')}>Lojas</Button></ListItem>
                </Flex>

                <ListItem><Button textAlign='center'><CiCirclePlus />Adicionar Loja</Button></ListItem>
            </>)
        else
            return (<>
                <Sidebar />
                <ListItem><Button textAlign='center'><CiCirclePlus />Adicionar Loja</Button></ListItem>
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
