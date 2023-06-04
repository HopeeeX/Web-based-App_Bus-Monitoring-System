import React from 'react';
import SideBarDriver from '../../components/SideBar/SideBarDriver';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  flex flex-cols`;

const SidebarContainer = tw.div`
md:w-64 sm:w-auto`;

const DriverDB = () => {


  return (
    <Wrapper>
      <SidebarContainer>
      <SideBarDriver />
      </SidebarContainer>
        {/* Render the child routes based on the URL path */}
        <Outlet />
    </Wrapper>
  );
};

export default DriverDB;
