/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../../../firebase';

const getStatusBackgroundColor = (status) => {
  if (status === 'Pending') {
    return 'bg-[#FBFB79E0] text-[#A7A9AC]';
  } else if (status === 'Approved') {
    return 'bg-[#77DD77E0] text-white';
  } else if (status === 'Unapproved') {
    return 'bg-[#FF6961E0] text-white';
  }
};

const Status = ({ status, reportId, onStatusChange }) => {
  const [editableStatus, setEditableStatus] = useState(status);

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setEditableStatus(newStatus);

    try {
      const reportRef = doc(firestore, 'inspection_reports', reportId);
      await updateDoc(reportRef, { status: newStatus });
      console.log('Status updated successfully!');
      onStatusChange(reportId, newStatus); // Notify parent component about the status change
    } catch (error) {
      console.log('Error updating status:', error);
    }
  };

  return (
    <div className='inline-block'>
      <select
        className={`rounded-full px-3 py-1 text-sm font-inter font-semibold border outline-none appearance-none text-center ${getStatusBackgroundColor(
          editableStatus
        )}`}
        value={editableStatus}
        onChange={handleStatusChange}
      >
        <option value='Pending' className='bg-white text-[#A7A9AC] hidden'>
          Pending
        </option>
        <option value='Approved' className='bg-white text-[#A7A9AC]'>
          Approved
        </option>
        <option value='Unapproved' className='bg-white text-[#A7A9AC]'>
          Unapproved
        </option>
      </select>
    </div>
  );
};

export default Status;
