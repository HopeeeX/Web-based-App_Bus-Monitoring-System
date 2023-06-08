/* eslint-disable react/prop-types */
import React from 'react';

const getStatusBackgroundColor = (status) => {
  if (status === 'Pending') {
    return 'bg-[#FBFB79E0]';
  } else if (status === 'Approved') {
    return 'bg-[#77DD77E0]';
  } else if (status === 'Unapproved') {
    return 'bg-[#FF6961E0]';
  }
};

const Status = ({ status }) => {
  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusBackgroundColor(status)}`}>
      {status}
    </span>
  );
};

export default Status;
