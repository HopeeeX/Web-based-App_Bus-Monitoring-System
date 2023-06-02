import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const RowUser = ({text}) => {
    return (
        <tr>
            {text.map((row, index) => {
                if(row.includes("link=")){
                    row = row.replace("link=","");
                    return (<td key={index}className='p-3 text-sm text-gray-600 font-inter font-semibold text-center'>
                        <Link className='underline text-blue-400' to="/mechanic/viewInspection">{row}</Link>
                        
                    </td>)
                }
                else{
                    return (<td key={index}className='p-3 text-sm text-gray-600 font-inter font-semibold text-center'>{row}</td>)
                }
            

            }
                    
                    
                    )}
        </tr>
    );
}
    
RowUser.propTypes = {
    text: PropTypes.array.isRequired,
};  

export default RowUser;