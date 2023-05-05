import React from 'react';
import Sidebar from '../../components/SideBar/SideBarDriver';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const DBWrapper = tw.div`
  flex flex-cols`;

const SidebarContainer = tw.div`
  md:w-64 sm:w-0`;

const DriverDB = () => {


  return (
    <DBWrapper>
      <SidebarContainer>
      <Sidebar />
      </SidebarContainer>
        {/* Render the child routes based on the URL path */}
        <Outlet />
    </DBWrapper>
  );
};

export default DriverDB;
