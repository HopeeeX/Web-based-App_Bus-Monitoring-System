import React from 'react'
import Inspection from '../../assets/images/inspectionGIF.gif'
const InspectionModal = () => {
  return (
    <div className='bg-white p-7 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-64 md:w-96 lg:w-[420px] text-sm md:text-base' >
      <img src={Inspection} alt='Inspection icon' className='w-24 h-24 md:w-36 md:h-36'></img>
      <p>Start your inspection!</p>
      <p>Click the “Start” button to proceed.</p>
      <a href ='/inspection'>
      <button
        className='border outline-none bg-primary w-full font-inter text-base md:text-xl text-white px-4 py-2 mt-5 text-center font-semibold rounded-2xl'
      >
        Start
      </button>
      </a>
    </div>
  )
}

export default InspectionModal