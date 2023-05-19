import React from 'react';
import tw from 'tailwind-styled-components'
import PropTypes from "prop-types";

const Wrapper = tw.div`
    mt-5 md:mt-8`;

const AddButton = ({text}) => {
    return (  
        <Wrapper>
        <button className='border outline-none bg-primary text-gray-100 font-inter rounded-full font-semibold w-[160px] h-[40px] hover:bg-purple-900'>
            {text}
        </button>
        </Wrapper>
    );
}

AddButton.propTypes = {
    text: PropTypes.string.isRequired,
};
export default AddButton;