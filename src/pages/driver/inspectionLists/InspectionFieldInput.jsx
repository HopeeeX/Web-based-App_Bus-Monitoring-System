/* eslint-disable react/prop-types */
import React, { useEffect, useRef} from 'react';

const InspectionFieldInput = ({ busIdError, handleBusIdChange, busId }) => {
  const busIdInputRef = useRef(null); // Create a ref for the busId input field

  useEffect(() => {
    var date = new Date();
    document.getElementById('dateInput').value = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split('T')[0];
    document.getElementById('timeInput').value = date.toTimeString().slice(0, 8);

    busIdInputRef.current.focus(); // Set focus on the busId input field
  }, []);

  return (
    <div className="flex flex-col md:flex-row  justify-between w-full px-4 md:px-16 xl:px-32 font-inter font-semibold text-fontColor text-sm md:text-base mb-7 md:mb-11 lg:mb-16">
      <div className="flex flex-col md:mb-3">
        <label htmlFor="busIdInput">Bus ID</label>
        <input
          type="text"
          id="busIdInput"
          placeholder="Enter Number"
          className="inspectionInputs w-full md:w-48 lg:w-64 xl:w-80 focus:outline-none focus:border-fontColor"
          required
          value={busId}
          onChange={handleBusIdChange}
          ref={busIdInputRef} // Assign the ref to the input field
        />
        {busIdError && <span className="text-red-500">{busIdError}</span>}
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="flex flex-col md:mb-3">
          <label htmlFor="dateInput">Date</label>
          <input
            type="date"
            id="dateInput"
            className="inspectionInputs"
            readOnly="readonly"
            required
          />
        </div>
        <div className="flex flex-col md:mb-3">
          <label htmlFor="timeInput">Time</label>
          <input
            type="time"
            id="timeInput"
            className="inspectionInputs"
            readOnly="readonly"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InspectionFieldInput;
