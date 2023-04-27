import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Back from '../assets/icons/Back.png';
import Person from '../assets/images/Person.png';
import Dashboard from '../assets/icons/Dashboard.png';
import File from '../assets/icons/File.png';
import Folder from '../assets/icons/Folder.png';
import Logout from '../assets/icons/Logout.png';


const SidebarContainer = tw.div`
    fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-50`;

const SidebarWrapper = tw.div`
    fixed top-0 left-0 w-64 h-full bg-sidebar text-white transition-all duration-300 ease-in-out`;

const SidebarTitleWrapper = tw.div`
    h-35 px-5 md:pt-6`;

const SidebarTitle = tw.h2`
    text-sm font-inter font-semibold font-white`;

const SideBarProfileWrapper = tw.div`
    pt-4 flex md:pt-3`;

const SideBarProfileImage = tw.img`
    h-[80px] w-[80px]`;

const SidebarCloseButton = tw.button`
    focus:outline-none pl-[215px] pt-4`;

const SidebarBackIcon = tw.img`
    w-[28px] h-[28px]`

const SideBarTextWrapper = tw.div`
    flex flex-col`;

const SideBarProfileText1 = tw.h4`
    text-white font-inter font-semibold text-[17px] pl-2 pt-3`;

const SideBarProfileText2 = tw.h5`
    text-white font-inter font-semibold text-[15px] pl-2 pt-2`;

const SidebarMenu = tw.ul`
    py-0 pt-5 md:pt-0 `;

const SidebarMenuItem = tw.li`
    flex px-4 py-2 mt-1 ml-2 hover:bg-highlight/40 cursor-pointer rounded-lg w-[240px] md:mt-2`;

const SideBarMenuIcon = tw.img`
    w-[25px] h-[25px] ml-1.5 mr-4`;

const SideBarMenuText = tw.h3`
    text-white font-inter font-semibold text-[16px]`;

const SideBarFooterWrapper = tw.div`
    absolute bottom-0 w-full py-4`;

const SideBarFooter = tw.div`
    border-t border-zinc-300`;

const SidebarMobileButton = tw.button`
    block lg:hidden text-gray-500 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out mt-6 ml-5`;

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);

};
const location = useLocation();
    return (
    <>
        <SidebarMobileButton onClick={handleSidebarToggle}>
            {showSidebar ? <FiX size={20} /> : <FaBars size={20} />}
        </SidebarMobileButton>
        {showSidebar ? (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarCloseButton onClick={handleSidebarToggle}>
                    <SidebarBackIcon src={Back} alt='back'/>
                </SidebarCloseButton>
                <SidebarTitleWrapper>
                    <SidebarTitle>Profile</SidebarTitle>
                    <SideBarProfileWrapper>
                        <SideBarProfileImage src={Person} alt='image'/>
                    <SideBarTextWrapper>
                        <SideBarProfileText1>Kyle Mabuna</SideBarProfileText1>
                        <SideBarProfileText2>Driver</SideBarProfileText2>
                    </SideBarTextWrapper> 
                    </SideBarProfileWrapper>
                </SidebarTitleWrapper>
                <SidebarMenu>
                    <SidebarTitleWrapper>
                        <SidebarTitle>Menu</SidebarTitle>
                    </SidebarTitleWrapper>
                        <SidebarMenuItem>
                            <Link to='/driver' className={`${location.pathname === '/driver'}`}>
                            <SideBarMenuIcon src={Dashboard} alt='dashboard'/></Link>
                            <SideBarMenuText>Dashboard</SideBarMenuText>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link to='/driver/reports' className={`${location.pathname === '/driver/reports'}`}>
                            <SideBarMenuIcon src={File} alt='file'/></Link>
                            <SideBarMenuText>Inspection Reports</SideBarMenuText>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link to='/driver/trips' className={`${location.pathname === '/driver/trips'}`}>
                            <SideBarMenuIcon src={Folder} alt='file'/></Link>
                            <SideBarMenuText>Trip Summary</SideBarMenuText>
                        </SidebarMenuItem>
                        <SideBarFooterWrapper>
                        <SideBarFooter>
                        <SidebarMenuItem>
                            <Link to='/driver/trips' className={`${location.pathname === '/driver/trips'}`}>
                            <SideBarMenuIcon src={Folder} alt='file'/></Link>
                            <SideBarMenuText>Logout</SideBarMenuText>
                        </SidebarMenuItem>
                        </SideBarFooter>
                        </SideBarFooterWrapper>
                    </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
        ): 
        ( 
        <SidebarWrapper className="hidden md:block">
            <SidebarTitleWrapper>
                <SidebarTitle>Profile</SidebarTitle>
                    <SideBarProfileWrapper>
                        <SideBarProfileImage src={Person} alt='image'/>
                    <SideBarTextWrapper>
                        <SideBarProfileText1>Kyle Mabuna</SideBarProfileText1>
                        <SideBarProfileText2>Driver</SideBarProfileText2>
                    </SideBarTextWrapper>
                    </SideBarProfileWrapper>
            </SidebarTitleWrapper>
            <SidebarMenu>
            <SidebarTitleWrapper>
                        <SidebarTitle>Menu</SidebarTitle>
                    </SidebarTitleWrapper>
                        <SidebarMenuItem>
                            <Link to='/driver' className={`${location.pathname === '/driver'}`}>
                            <SideBarMenuIcon src={Dashboard} alt='dashboard'/></Link>
                            <SideBarMenuText>Dashboard</SideBarMenuText>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link to='/driver/reports' className={`${location.pathname === '/driver/reports'}`}>
                            <SideBarMenuIcon src={File} alt='file'/></Link>
                            <SideBarMenuText>Inspection Reports</SideBarMenuText>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link to='/driver/trips' className={`${location.pathname === '/driver/trips'}`}>
                            <SideBarMenuIcon src={Folder} alt='folder'/></Link>
                            <SideBarMenuText>Trip Summary</SideBarMenuText>
                        </SidebarMenuItem>
                        <SideBarFooterWrapper>
                        <SideBarFooter>
                        <SidebarMenuItem>
                            <Link to='/' className={`${location.pathname === '/'}`}>
                            <SideBarMenuIcon src={Logout} alt='logout'/></Link>
                            <SideBarMenuText>Logout</SideBarMenuText>
                        </SidebarMenuItem>
                        </SideBarFooter>
                        </SideBarFooterWrapper>
            </SidebarMenu>
        </SidebarWrapper>
        )}
    </>
    );
};

export default Sidebar;
