import React from 'react';
import Sidebar from '../../components/sidebar';
import { Outlet } from 'react-router-dom';

const DriverDB = () => {
  return (
    <div className='flex flex-none w-full h-full gap-4'>
      <Sidebar />
      <div className='p-2 max-w-screen'>
        {/* Render the child routes based on the URL path */}
        <Outlet />
      </div>
    </div>
  );
};

export default DriverDB;