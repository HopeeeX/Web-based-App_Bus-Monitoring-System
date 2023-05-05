import React from 'react';
import tw from 'tailwind-styled-components';
import LogoutIcon from '../../assets/icons/Logout.png';
import MenuItem from './MenuItem';

const SideBarFooterWrapper = tw.div`
    absolute bottom-0 w-full py-4`;

const SideBarFooter = tw.div`
    border-t border-zinc-300`;

const Logout = () => {
    return (
        <SideBarFooterWrapper>
        <SideBarFooter>
        <MenuItem to="/" iconSrc={LogoutIcon} iconAlt='logout' text='Logout' />
        </SideBarFooter>
        </SideBarFooterWrapper>
    );
}

export default Logout;