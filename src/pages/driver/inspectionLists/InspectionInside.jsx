import React, { useState } from 'react'
import UploadPhoto from '../../../components/Modals/UploadPhoto';
import { inspectionInside } from '../../../constants'
import { InspectionAccess } from './InspectionContext';


const InspectionInside = () => {
  const [toggleState, setToggleState] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { toggleDamaged } = InspectionAccess();

  const handleToggle = (item) => {
    if (!toggleState[item.id]) {
      setSelectedItemId(item.id);
      setIsModalOpen(true);
    } else {
      updateToggleState(item.id);
    }
  };
  
  const updateToggleState = (id) => {
    setToggleState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    toggleDamaged(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
  };

  const handleUpload = () => {
    if (selectedItemId) {
      updateToggleState(selectedItemId);
      closeModal();
    }
  };
  
    return (
      <div>
      <div className="text-center w-80 sm:w-96 md:w-[30rem] lg:w-[40rem]  px-2 sm:px-6 md:px-12 pb-5 md:pt-5 lg:pt-10 md:pb-16 font-medium bg-white drop-shadow-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl  text-inspectionTitle my-6">INSIDE</h2>
        {inspectionInside.map((item) => (
          <div key={item.id} className="flex justify-between items-center text-xs sm:text-sm md:text-lg lg:text-xl my-[14px]">
            <p className="w-9/12 py-1 md:py-2 lg:py-[10px] pl-2 md:pl-4 lg:pl-8 text-start text-inspectionList bg-[#E6E3E3BA]">{item.title}</p>
            <button
              className={`border outline-none w-3/12 py-1 md:py-2 lg:py-[10px] px-1 ${
                toggleState[item.id] ? "bg-[#FF8B85] text-[#BF4842]" : "bg-[#77DD77] text-[#106710E0]"
              }`}
              onClick={() => handleToggle(item.id)}
            >
              {toggleState[item.id] ? "Damaged" : "Damage"}
            </button>
            {isModalOpen && (
        <UploadPhoto onClose={closeModal} onUpload={handleUpload} itemId={item.title}  />
      )}
          </div>
        ))}
      </div>

      </div>
    )
}

export default InspectionInside