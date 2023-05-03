import React from 'react';
import Sidebar from '../../components/SideBar1';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const DBWrapper = tw.div`
  flex flex-cols`;

const MapWrapper = tw.div`
  w-4/5`;

const SidebarFrame = tw.div`
  w-1/5`;

const DriverDB = () => {
  return (
    <DBWrapper>
      <SidebarFrame>
      <Sidebar />
      </SidebarFrame>
      <MapWrapper>
        {/* Render the child routes based on the URL path */}
        <Outlet />
      </MapWrapper>
    </DBWrapper>
  );
};

export default DriverDB;
