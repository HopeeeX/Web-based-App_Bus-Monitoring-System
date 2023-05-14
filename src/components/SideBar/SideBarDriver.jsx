import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import tw from 'tailwind-styled-components';
import Back from '../../assets/icons/Back.png';
import Person from '../../assets/images/Person.png';
import Dashboard from '../../assets/icons/Dashboard.png';
import File from '../../assets/icons/File.png';
import Folder from '../../assets/icons/Folder.png';
import MenuItem from './MenuItem';
import Logout from './Logout'


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

const SidebarMobileButton = tw.button`
    block lg:hidden text-gray-500 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out mt-6 ml-5`;

const getCookieValue = (name) => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
            }
        }
        return '';
        }

const SidebarDriver = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const displayName= getCookieValue('name');
const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);

};

    return (
    <>
        <SidebarMobileButton onClick={handleSidebarToggle}>
            {showSidebar ? <FiX size={20} /> : <FaBars size={20} />}
        </SidebarMobileButton>
        {showSidebar ? (
        <SidebarContainer id='sidebar'>
            <SidebarWrapper>
                <SidebarCloseButton onClick={handleSidebarToggle}>
                    <SidebarBackIcon src={Back} alt='back'/>
                </SidebarCloseButton>
                <SidebarTitleWrapper>
                    <SidebarTitle>Profile</SidebarTitle>
                    <SideBarProfileWrapper>
                        <SideBarProfileImage src={Person} alt='image'/>
                    <SideBarTextWrapper>
                        <SideBarProfileText1>{displayName}</SideBarProfileText1>
                        <SideBarProfileText2>Driver</SideBarProfileText2>
                    </SideBarTextWrapper> 
                    </SideBarProfileWrapper>
                </SidebarTitleWrapper>
                <SidebarMenu>
                    <SidebarTitleWrapper>
                        <SidebarTitle>Menu</SidebarTitle>
                    </SidebarTitleWrapper>
                    <MenuItem to="/driver" iconSrc={Dashboard} iconAlt='dashboard' text='Dashboard' />
                    <MenuItem to="/driver/reports" iconSrc={File} iconAlt='file' text='Inspection Reports' />
                    <MenuItem to="/driver/trips" iconSrc={Folder} iconAlt='folder' text='Trip Summary' />
                    <Logout/>
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
                        <SideBarProfileText1>{displayName}</SideBarProfileText1>
                        <SideBarProfileText2>Driver</SideBarProfileText2>
                    </SideBarTextWrapper>
                    </SideBarProfileWrapper>
            </SidebarTitleWrapper>
            <SidebarMenu>
                <SidebarTitleWrapper>
                        <SidebarTitle>Menu</SidebarTitle>
                </SidebarTitleWrapper>
                    <MenuItem to="/driver" iconSrc={Dashboard} iconAlt='dashboard' text='Dashboard' />
                    <MenuItem to="/driver/reports" iconSrc={File} iconAlt='file' text='Inspection Reports' />
                    <MenuItem to="/driver/trips" iconSrc={Folder} iconAlt='folder' text='Trip Summary' />
                    <Logout/>
            </SidebarMenu>
        </SidebarWrapper>
        )}
    </>
    );
};

export default SidebarDriver;
