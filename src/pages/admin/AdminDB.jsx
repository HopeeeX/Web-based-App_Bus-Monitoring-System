import React from 'react';
import tw from 'tailwind-styled-components'
import SideBarAdmin from '../../components/SideBar/SideBarAdmin';
import { Outlet } from 'react-router-dom';

const Wrapper = tw.div`
    flex flex-cols`;

const SidebarContainer = tw.div`
    md:w-64 sm:w-0`;

const AdminDB = () => {
    return (
    <Wrapper>
        <SidebarContainer>
            <SideBarAdmin/>
        </SidebarContainer>
        <Outlet />
    </Wrapper>
    );
}

export default AdminDB;