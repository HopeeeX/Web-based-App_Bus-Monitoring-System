import React from 'react';
import tw from 'tailwind-styled-components';
import LogoutIcon from '../../assets/icons/Logout.png';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Auth/Auth';

const SideBarFooterWrapper = tw.div`
    absolute bottom-0 w-full py-4`;

const SideBarFooter = tw.div`
    border-t border-zinc-300`;

const SidebarMenuItem = tw.li`
    flex px-4 py-2 mt-1 ml-2 hover:bg-highlight/40 cursor-pointer rounded-lg w-[240px] md:mt-2`;

const SideBarMenuIcon = tw.img`
    w-[25px] h-[25px] ml-1.5 mr-4`;

const SideBarMenuText = tw.h3`
    text-white font-inter font-semibold text-[16px]`;

const Logout = () => {
    const {logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch(e) {
            console.log(e.message);
        }
    }
    return (
        <SideBarFooterWrapper>
        <SideBarFooter>
            <div onClick={handleLogout}>
            <SidebarMenuItem>
            <SideBarMenuIcon src={LogoutIcon} alt='logout'/>
            <SideBarMenuText>Logout</SideBarMenuText>
        </SidebarMenuItem>
            </div>

        </SideBarFooter>
        </SideBarFooterWrapper>
    );
}

export default Logout;