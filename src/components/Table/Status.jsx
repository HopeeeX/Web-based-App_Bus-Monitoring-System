/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../../../firebase';

function getCookieValue(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');

  for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null; // Cookie not found
}

// Usage:
var cookieValue = getCookieValue("name");


const getStatusBackgroundColor = (status) => {
  if (status === 'Pending') {
    return 'bg-[#FBFB79E0] text-[#A7A9AC]';
  } else if (status === 'Approved') {
    return 'bg-[#77DD77E0] text-white';
  } else if (status === 'Disapproved') {
    return 'bg-[#FF6961E0] text-white';
  }
};

const Status = ({ status, reportId, onStatusChange }) => {
  const [editableStatus, setEditableStatus] = useState(status);
  const persona = document.cookie.includes('persona=mechanic');

  const handleStatusChange = async (event) => {
    if (!persona || editableStatus !== 'Pending') return; // Check if persona is not mechanic or status is not Pending, then return and do nothing

    const newStatus = event.target.value;
    setEditableStatus(newStatus);

    try {
      const reportRef = doc(firestore, 'inspection_reports', reportId);
      await updateDoc(reportRef, { status: newStatus, mechanic: getCookieValue("name")});
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
        disabled={!persona || editableStatus !== 'Pending'} // Disable the select element when persona is not mechanic or status is not Pending
      >
        <option value='Pending' className='bg-white text-[#A7A9AC] hidden'>
          Pending
        </option>
        <option value='Approved' className='bg-white text-[#A7A9AC]'>
          Approved
        </option>
        <option value='Disapproved' className='bg-white text-[#A7A9AC]'>
          Unapproved
        </option>
      </select>
    </div>
  );
};

export default Status;
