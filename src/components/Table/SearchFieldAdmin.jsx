import React from 'react';
import tw from 'tailwind-styled-components'
import Search from '../../assets/icons/Search.png'
import PropTypes from "prop-types";

const Container =tw.div`
    mt-3 mr-3 md:mr-8 md:flex justify-end md:mt-5`;

const Wrapper = tw.div`
    relative`;

const IconWrapper = tw.div`
    absolute left-3 top-2`;

const Icon = tw.img`
    w-[24px] h-[24px]`;

const SearchFieldAdmin = ({type, id, placeholder}) => {
    return (
        <Container>
            <Wrapper>
                <input className='border outline-none border-gray-400 rounded-xl px-12 py-2 h-10 w-full md:w-[350px] lg:w-[480px] font-inter text-white/30 text-sm' type={type} id={id} placeholder={placeholder}/>
            <IconWrapper>
                <Icon src={Search} alt='search'/>
            </IconWrapper>
            </Wrapper>
        </Container>
    );
}

SearchFieldAdmin.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default SearchFieldAdmin;