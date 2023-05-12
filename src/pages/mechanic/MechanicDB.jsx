import React from 'react';
import tw from 'tailwind-styled-components'
import SideBarMechanic from '../../components/SideBar/SideBarMechanic';

const Wrapper = tw.div`
    flex flex-cols`;

const SidebarContainer = tw.div`
    md:w-64 sm:w-0`;

const MechanicDB = () => {
    return (
        <Wrapper>
            <SidebarContainer>
                <SideBarMechanic/>
            </SidebarContainer>
        </Wrapper>
    );
}

export default MechanicDB;