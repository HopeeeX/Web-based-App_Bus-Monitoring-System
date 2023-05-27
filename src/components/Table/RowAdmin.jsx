import React from 'react';
import PropTypes from 'prop-types';
import OptionButton from './OptionButton';

const RowAdmin = ({text}) => {
    return (
        <tr>
            {text.map((row, index) => (
                    <td key={index}className='p-3 text-sm text-gray-600 font-inter font-semibold text-center'>{row}</td>))}
                    <OptionButton/>
        </tr>
        );
    }
    
RowAdmin.propTypes = {
    text: PropTypes.array.isRequired,
};
    

export default RowAdmin;