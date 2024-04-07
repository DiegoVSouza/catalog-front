import React, { useState } from 'react';
import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    IconButton,
    useDisclosure,
    useColorMode,
    Flex,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ToggleColorButton from '../ToggleColorButton/ToggleColorButton';
const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
    const history = useNavigate()
    const goTo = (url: string) => {
        history(url)
        onClose()
    }
    return (
        <>
            <IconButton
                aria-label="Open Menu"
                icon={<RxHamburgerMenu />}
                onClick={onOpen}
                variant="outline"
            />
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='space-between'>
                        <Flex w='100%' direction='column' gap='1rem' >
                            <Button onClick={() => goTo('/home/')} variant="ghost" w="full">
                                Pratos
                            </Button>
                            <Button onClick={() => goTo('/login/')} variant="ghost" w="full">
                                To do
                            </Button>
                        </Flex>

                        <ToggleColorButton />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Sidebar;
