import React from 'react';
import tw from 'tailwind-styled-components'
import Search from '../../assets/icons/Search.png'
import PropTypes from "prop-types";

const Wrapper =tw.div`
    relative`;

const Icon = tw.img`
    w-[25px] h-[25px] absolute right-3 top-2`;

const SearchField = ({type, id, placeholder,}) => {
    return (
        <Wrapper>
        <input className='border outline-none border-gray-400 rounded-xl h-10 w-[300px] text-gray-300 font-inter' type={type} id={id} placeholder={placeholder}>
            <Icon src={Search} alt='search'/>
        </input>
        </Wrapper>
    );
}

SearchField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};


export default SearchField;