/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const getStatusBackgroundColor = (status) => {
    if (status === 'Pending') {
        return 'bg-[#FBFB79E0] text-[#A7A9AC]';
    } else if (status === 'Approved') {
        return 'bg-[#77DD77E0] text-white';
    } else if (status === 'Unapproved') {
        return 'bg-[#FF6961E0] text-white';
    }
};

const Status = ({ status}) => {
    const [editableStatus, setEditableStatus] = useState(status);

    const handleStatusChange = (event) => {
    setEditableStatus(event.target.value);
};


return (
    <div className='inline-block'>
        <select
        className={`rounded-full px-3 py-1 text-sm font-inter font-semibold border outline-none -ml-4 ${getStatusBackgroundColor(editableStatus)}`}
        value={editableStatus}
        onChange={handleStatusChange}
        >
        <option value="Pending" className='bg-white text-[#A7A9AC]'>Pending</option>
        <option value="Approved" className='bg-white text-[#A7A9AC]'>Approved</option>
        <option value="Unapproved" className='bg-white text-[#A7A9AC]'>Unapproved</option>
        </select>
    </div>
    );
};

export default Status;