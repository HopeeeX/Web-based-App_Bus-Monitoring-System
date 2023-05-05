import React from 'react'

const InspectionFieldInput = () => {
  return (
    <div class="flex flex-col md:flex-row  justify-between w-full px-4 md:px-16 xl:px-32 font-inter font-semibold text-fontColor text-sm md:text-base mb-7 md:mb-11 lg:mb-16">
      <div class="flex flex-col md:mb-3 ">
        <label for="busIdInput" class="form-label">Bus ID</label>
        <input type="text" class="form-control" id="busIdInput" placeholder="Enter Number" className='inspectionInputs w-full md:w-48 lg:w-64 xl:w-80 focus:outline-none focus:border-fontColor' required/>
      </div>
      <div className='flex flex-col md:flex-row md:gap-5'>
      <div class="flex flex-col md:mb-3">
        <label for="dateInput" class="form-label">Date</label>
        <input type="date" class="form-control" id="dateInput" className='inspectionInputs' required />
      </div>
      <div class="flex flex-col md:mb-3">
        <label for="timeInput" class="form-label">Time</label>
        <input type="time" class="form-control" id="timeInput" className='inspectionInputs' required />
      </div>
      </div>
    </div>
  )
}

export default InspectionFieldInput