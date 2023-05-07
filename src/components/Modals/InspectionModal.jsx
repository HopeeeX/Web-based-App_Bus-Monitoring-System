import React from 'react'
import Inspection from '../../assets/images/inspectionGIF.gif'
const InspectionModal = ({ onClose }) => {
  return (
    <div className='bg-white p-7 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-[420px]' >
      <img src={Inspection} alt='Inspection icon' className='w-36 h-36'></img>
      <p>Start your inspection!</p>
      <p>Click the “Start” button to proceed.</p>
      <button
        className='border outline-none bg-primary w-80 font-inter text-xl text-white px-4 py-2 mt-5 text-center font-semibold rounded-2xl'
        onClick={onClose}
      >
        Start
      </button>
    </div>
  )
}

export default InspectionModal