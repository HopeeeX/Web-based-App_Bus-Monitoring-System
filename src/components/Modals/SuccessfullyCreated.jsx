import React, { useState } from 'react';
import Success from '../../assets/images/successGIF.gif';

const SuccessfullyCreated = ({ onClose }) => {
  return (
    <div className='bg-white p-7 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-[420px]'>
      <img src={Success} alt='Inspection icon' className='w-36 h-36'></img>
      <p>Successfully Created!</p>
      <button
        className='bg-primary w-80 font-inter text-xl text-white px-4 py-2 mt-5 text-center font-semibold rounded-2xl'
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default SuccessfullyCreated;