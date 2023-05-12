import React from 'react';
import tw from 'tailwind-styled-components'
import SideBarSuperAdmin from '../../components/SideBar/SideBarSuperAdmin';

const Wrapper = tw.div`
    flex flex-cols`;

const SidebarContainer = tw.div`
    md:w-64 sm:w-0`;

const SuperAdminDB = () => {
    return (
        <Wrapper>
        <SidebarContainer>
            <SideBarSuperAdmin/>
        </SidebarContainer>
    </Wrapper>
    );
}

export default SuperAdminDB;