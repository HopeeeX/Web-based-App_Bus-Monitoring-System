import React from 'react';
import tw from 'tailwind-styled-components'
import Option from '../../assets/icons/Option.png'

const Wrapper = tw.div`
    mt-2.5`;


const OptionButton = () => {
    return (
        <Wrapper>
            <button>
                <img src={Option} alt='option' className='w-[22px] h-[22px]'/>
            </button>
        </Wrapper>
    );
}

export default OptionButton;