import React, { useState } from 'react'
import {inspectionRight} from '../../../constants'

const InspectionRight = () => {

  const [toggleState, setToggleState] = useState({});

  const handleToggle = (id) => {
      setToggleState((prevState) => ({
        ...prevState,
        [id]: !prevState[id], 
      }));
    };

  return (
    <div className="text-center w-80 sm:w-96 md:w-[30rem] lg:w-[40rem]  px-2 sm:px-6 md:px-12 pb-5 md:pt-5 lg:pt-10 md:pb-16 font-medium bg-white drop-shadow-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl  text-inspectionTitle my-6">RIGHT</h2>
        {inspectionRight.map((item) => (
          <div key={item.id} className="flex justify-between items-center text-xs sm:text-sm md:text-lg lg:text-xl my-[14px]">
            <p className="w-9/12 py-1 md:py-2 lg:py-[10px] pl-2 md:pl-4 lg:pl-8 text-start text-inspectionList bg-[#E6E3E3BA]">{item.title}</p>
            <button
              className={`w-3/12 py-1 md:py-2 lg:py-[10px] px-1 ${
                toggleState[item.id] ? "bg-[#FF8B85] text-[#BF4842]" : "bg-[#77DD77] text-[#106710E0]"
              }`}
              onClick={() => handleToggle(item.id)}
            >
              {toggleState[item.id] ? "Damaged" : "Damage"}
            </button>
          </div>
        ))}
      </div>
  )
}

export default InspectionRight