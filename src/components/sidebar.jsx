import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Notification from '../assets/icons/Notification.png';
import Dashboard from '../assets/icons/Dashboard.png';
import File from '../assets/icons/File.png';
import Folder from '../assets/icons/Folder.png';
import Logout from '../assets/icons/Logout.png';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className='w-80 h-full bg-white p-5 pt-8 flex flex-col font-inter font-semibold text-xl'>
      <img src={Notification} alt='notification' className='h-8 w-8  self-end' />
      {/* Profile part */}
      <div className='flex flex-col gap-2.5 mb-8'>
        <h3 className='text-fontColor ml-2'>Profile</h3>
        <div className='flex flex-row items-center'>
          <img src='https://i.ibb.co/ZNFhcFB/sdxzd.jpg' alt='plchldr.co' className='w-20 h-20 rounded-full' />
          <div className='flex flex-col text-lg ml-3'>
            <h4>Mabuna, Kyle</h4>
            <h4>Driver </h4>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className='flex flex-col gap-7 text-lg w-60'>
        <Link to='/driver' className={`p-2.5 gap-4 flex flex-wrap rounded-lg ${location.pathname === '/driver' ? 'bg-primary/40 text-white' : ''}`}>
          <img src={Dashboard} alt='dashboard icon' className='h-[30px] w-[30px]'></img>Dashboard
        </Link>
        <Link to='/driver/reports' className={`p-2.5 gap-4 flex flex-wrap rounded-lg  ${location.pathname === '/driver/reports' ? 'bg-primary/40 text-white' : ''}`}>
          <img src={File} alt='file icon' className='h-[30px] w-[30px]'></img>Inspection Reports
        </Link>
        <Link to='/driver/trips' className={`p-2.5 gap-4 flex flex-wrap rounded-lg  ${location.pathname === '/driver/trips' ? 'bg-primary/40 text-white' : ''}`}>
          <img src={Folder} alt='folder icon' className='h-[30px] w-[30px]'></img>Trip Summary
        </Link>
        <Link to='/' className={`p-2.5 gap-4 flex flex-wrap rounded-lg  ${location.pathname === '/' ? 'bg-primary/40 text-white' : ''}`}>
          <img src={Logout} alt='logout icon' className='h-[30px] w-[30px]'></img>Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;