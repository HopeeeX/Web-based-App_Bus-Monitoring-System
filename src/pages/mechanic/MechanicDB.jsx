import React from 'react';
import tw from 'tailwind-styled-components'
import SideBarMechanic from '../../components/SideBar/SideBarMechanic';
import { Outlet } from 'react-router-dom';

const Wrapper = tw.div`
    flex flex-cols`;

const SidebarContainer = tw.div`
    absolute md:w-64 sm:w-auto`;

const MechanicDB = () => {
    return (
        <Wrapper>
            <SidebarContainer>
                <SideBarMechanic/>
            </SidebarContainer>
            <Outlet/>
        </Wrapper>
    );
}

export default MechanicDB;