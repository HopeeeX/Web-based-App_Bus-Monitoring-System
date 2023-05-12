import React from 'react'
import InspectionFieldInput from './inspectionLists/InspectionFieldInput';
import InspectionFront from './inspectionLists/InspectionFront';
import InspectionRight from './inspectionLists/InspectionRight';
import InspectionBack from './inspectionLists/InspectionBack';
import InspectionLeft from './inspectionLists/InspectionLeft';
import InspectionInside from './inspectionLists/InspectionInside'
import tw from 'tailwind-styled-components';
const InspectionChecklist = () => {

  


  const MainWrapper = tw.div`
    flex flex-col justify-center items-center font-inter bg-[#F3F3F3] pb-14 md:pb-40 lg:pb-52 
  `
  return (
    <MainWrapper>
      <h1 className='w-full font-semibold text-center text-inspectionTitle  text-2xl sm:text-3xl md:text-4xl lg:text-[40px] border-b-2 pt-8 pb-6 border-secondary mb-8'>360-Degree Inspection Form</h1>
      <InspectionFieldInput/>
      <div className='flex flex-col items-center gap-5 lg:gap-12'>
        <InspectionFront/>
        <InspectionRight/>
        <InspectionBack/>
        <InspectionLeft/>
        <div className='flex flex-col gap-8 items-center'>
          <InspectionInside/>
          <div className="remarksContainer">
            <label htmlFor="remarksInput" className='text-base sm:text-lg md:text-xl lg:text-2xl'>Remarks</label>
            <input type="text" id="remarksInput" placeholder="Enter your remarks" className='remarkInputs focus:outline-none focus:border-fontColor w-full' required/>
          </div>
          <button className='border outline-none buttonTemplate self-stretch'>SUBMIT</button>
        </div>
      </div>
    </MainWrapper>
  )
}

export default InspectionChecklist 