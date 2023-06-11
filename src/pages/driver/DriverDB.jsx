import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideBarDriver from '../../components/SideBar/SideBarDriver';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import DriverMain from './DriverMain';

const Wrapper = tw.div`
  flex flex-cols`;

const DriverDB = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  
  const handleSidebarToggle = () => {
    document.getElementById("sidebar").className = 'md:w-64 sm:w-auto'
    
    setShowSidebar(!showSidebar);
  };
  return (
    <Wrapper>
      <div className='md:w-64 sm:w-auto' id='sidebar'>
        <SideBarDriver showSidebar={showSidebar} handleSidebarToggle={handleSidebarToggle} />
      </div>
      {/* Render the child routes based on the URL path */}

      {location.pathname !== '/driver' ? (
        <Outlet  />
      ) : (
        <DriverMain handleSidebarToggle={handleSidebarToggle} />
      )}
    </Wrapper>
  );
};

export default DriverDB;
