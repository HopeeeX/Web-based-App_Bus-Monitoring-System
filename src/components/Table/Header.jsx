import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
    return (
        <thead className='bg-gray-100 border-b-2 border-gray-100'>
        <tr>
            {text.map((header, index) => (
                <th key={index} className='p-3 text-sm text-gray-500 font-inter tracking-wide text-center'>{header}</th>))}
        </tr>
    </thead>
);
};

Header.propTypes = {
    text: PropTypes.array.isRequired,
};

export default Header;
