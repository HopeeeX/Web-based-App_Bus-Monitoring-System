/* eslint-disable react/prop-types */
import React from 'react';
import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
    mt-4 ml-12 md:mt-6`;

const AddButton = ({text, clickfunc}) => {
    return (  
        <Wrapper>
        <button className='border outline-none bg-sidebar text-gray-100 tex-sm font-inter rounded-full font-semibold h-[40px] sm:w-[90px] md:w-[130px] lg:[200px] hover:bg-purple-800' onClick={clickfunc}>
            {text}
        </button>
        </Wrapper>
    );
}

export default AddButton;