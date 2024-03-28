import {
    IconButton,
    useColorMode,
} from '@chakra-ui/react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';

const ToggleColorButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <IconButton onClick={toggleColorMode} background='red'
                w='30%'
                _hover={{ "background": 'red.300' }} color='white'
                aria-label='Trocar modo de cor' icon={colorMode === 'light' ? <MdDarkMode /> : <MdWbSunny />} ></IconButton>
        </>
    );
};

export default ToggleColorButton;
