import React, { useState } from 'react';

const ConfirmModal = ({ onClose }) => {
  const [remarks, setRemarks] = useState('');

  const handleInputChange = (e) => {
    setRemarks(e.target.value);
  };

  return (
    <div className='bg-white p-7 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-[420px]'>
      <h2 className='text-sm font-inter text-tableFontColor font-semibold self-start'>Remarks</h2>
      <input
        type='text'
        placeholder='Type your remarks'
        value={remarks}
        onChange={handleInputChange}
        className='border border-gray-300 rounded-lg px-4 py-5 mt-2 mb-4 w-full text-sm'
      />
      <p className='w-80 font-inter text-black/90'>Click the “Confirm” button to approve this report</p>
      <button
        className='bg-primary w-80 font-inter text-xl text-white px-4 py-2 mt-2 mb-4 text-center font-semibold rounded-2xl'
        onClick={onClose}
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmModal