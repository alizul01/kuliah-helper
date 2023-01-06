import React, {ReactNode} from "react";
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {useDisclosure} from "@chakra-ui/hooks";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";

const Navbar: React.FC = () => {
    const {isOpen, onToggle} = useDisclosure();
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={"2rem"}
                py={{base: 2, md: 3}}
                px={{base: 2, md: 3}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
            >
                This is NavBar using ChakraUI, Gokil!
            </Flex>
        </Box>
    )
}

export default Navbar