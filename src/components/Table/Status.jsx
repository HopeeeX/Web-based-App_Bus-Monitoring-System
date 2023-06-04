import React from 'react';

const getStatusBackgroundColor = (status) => {
    if (status === "Pending") {
        return "bg-[#FBFB79E0]";
    } else if (status === "Approved") {
        return "bg-[#77DD77E0]";
    }else if (status === "Unapproved") {
        return "bg-[#FF6961E0]";
    }
};

const Status = () => {
    return (
        <span className={`rounded-full px-3 py-1 text-sm font-medium  ${getStatusBackgroundColor("Pending")}`}> Pending</span>
    );
}

export default Status;