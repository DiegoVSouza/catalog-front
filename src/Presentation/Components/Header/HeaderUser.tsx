import { useEffect } from "react";
import './Header.css'
import { Button, Flex, IconButton, ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
export default function Header() {
    const {colorMode,toggleColorMode} = useColorMode()

    return (
        <nav>
            <UnorderedList>
                <Flex gap='1rem'>
                <ListItem><Text color='white' as='a' href="#aboutme">Home</Text></ListItem>
                </Flex>
                <ListItem><IconButton  onClick={toggleColorMode} background='red' _hover={{"background":'red.300'}} color='white'  aria-label='Trocar modo de cor' icon={colorMode === 'light' ? <MdDarkMode /> : <MdWbSunny/>} ></IconButton></ListItem>
            </UnorderedList>
        </nav>
    );
}
