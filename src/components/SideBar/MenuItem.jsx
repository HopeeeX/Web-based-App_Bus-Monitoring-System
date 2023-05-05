import React from 'react';
import tw from 'tailwind-styled-components';
import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';

const SidebarMenuItem = tw.li`
    flex px-4 py-2 mt-1 ml-2 hover:bg-highlight/40 cursor-pointer rounded-lg w-[240px] md:mt-2`;

const SideBarMenuIcon = tw.img`
    w-[25px] h-[25px] ml-1.5 mr-4`;

const SideBarMenuText = tw.h3`
    text-white font-inter font-semibold text-[16px]`;

    

    const SBMenuItem = ({ to, iconSrc, iconAlt, text }) => {
        const location = useLocation();
        return (
            <Link to={to} className={`${location.pathname === to}`}>
            <SidebarMenuItem>
            <SideBarMenuIcon src={iconSrc} alt={iconAlt}/>
            <SideBarMenuText>{text}</SideBarMenuText>
        </SidebarMenuItem>
        </Link>
        );
    };

SBMenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SBMenuItem;