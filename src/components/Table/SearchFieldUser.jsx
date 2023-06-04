import React from 'react';
import tw from 'tailwind-styled-components';
import Search from '../../assets/icons/Search.png';
import PropTypes from "prop-types";

const Container = tw.div`
  mt-3 ml-12 mr-3 md:mr-8 md:flex justify-end md:mt-5 md:ml-40
`;

const Wrapper = tw.div`
  relative
`;

const IconWrapper = tw.div`
  absolute left-3 top-2
`;

const Icon = tw.img`
  w-[24px] h-[24px]
`;

const Input = tw.input`
  border outline-none border-gray-400 rounded-xl px-12 py-2 h-10 w-full md:w-[470px] font-inter text-black text-sm
`;

const SearchFieldUser = ({ type, id, placeholder, onChange }) => {
  return (
    <Container>
      <Wrapper>
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
        <IconWrapper>
          <Icon src={Search} alt='search' />
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};

SearchFieldUser.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchFieldUser;
