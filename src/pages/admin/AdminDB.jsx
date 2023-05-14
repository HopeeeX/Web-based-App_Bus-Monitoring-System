import React from 'react';
import tw from 'tailwind-styled-components'
import SideBarAdmin from '../../components/SideBar/SideBarAdmin';

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
    </Wrapper>
    );
}

export default AdminDB;