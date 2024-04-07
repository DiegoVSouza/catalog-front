import React from "react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineExitToApp } from "react-icons/md";
import { Avatar, Box, MenuGroup, MenuDivider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { UserStore } from "../../../Domain/Model/Token";
import { Creators as Admin } from '../../../store/modules/admin/actions'
import { Creators as User } from '../../../store/modules/user/actions'
import ToggleColorButton from "../ToggleColorButton/ToggleColorButton";

export const AtavatarMenu = () => {
    const { admin, store } = useSelector((state: UserStore) => state);
    const history = useNavigate();

    const verifyUser = () => {
        if (admin)
            if (admin.id)
                return 'admin'
        if (store)
            if (store.id)
                return 'store'
    }
    const getUser = () => {
        if (verifyUser() === 'admin') {
            return admin
        } else {
            return store
        }

    }


    function LoggoutAccount() {
        if (verifyUser() === 'admin') {
            Admin.logout()
        } else {
            User.logout()
        }
        history("/login");
    }

    return (
        <>
            {getUser() && (
                <Box
                    display="flex"
                    color="white"
                    alignItems={"center"}
                    verticalAlign="center"
                >

                    <Menu>
                        <MenuButton
                            as={Avatar}
                            aria-label="Options"
                            icon={<Avatar name={getUser()?.name} />}
                            variant="outline"
                            border="none"
                            colorScheme="white"
                            cursor={'pointer'}
                        />

                        <MenuList
                            className="menulist"
                            background="white"
                            padding="0.5rem 0"
                            color="#0B2A45"
                        >

                            <MenuItem
                                icon={<AiOutlineProfile />}
                            // onClick={}
                            >
                                Perfil
                            </MenuItem>
                            

                            <MenuItem
                                icon={<MdOutlineExitToApp />}
                                onClick={() => {
                                    LoggoutAccount();
                                }}
                            >
                                Sair
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            )
            }
        </>
    );
};
