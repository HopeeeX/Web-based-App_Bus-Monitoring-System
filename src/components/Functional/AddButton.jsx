import React from 'react';
import PropTypes from "prop-types";

const AddButton = ({text}) => {
    return (
        <button className='border outline-none bg-primary text-gray-100 font-inter rounded-full p-3 font-semibold w-[70px] h-[20px] hover:bg-purple-900'>
            {text}
        </button>
    );
}

AddButton.propTypes = {
    text: PropTypes.string.isRequired,
};
export default AddButton;