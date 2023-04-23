import React, { useState } from 'react';
import Modal from '../../components/Modal';

const DriverMain = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='w-full h-full relative'>
    <img src="https://i.ibb.co/JvxnHmx/Mapsicle-Map.png" alt="plchldr.co" className=" h-screen object-fill" style={{ width: 'calc(100vw - 20rem)' }}></img>
    <button
        className='bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 text-white font-inter rounded-full px-4 py-2 mt-5 font-semibold hover:bg-primary/75 transition-all'
        style={{ height: '40px', width: '280px' }}
        onClick={handleOpenModal}
      >
        Create a Trip
      </button>

      {showModal && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center'>
          <Modal onClose={handleCloseModal} /> {/* Render the Modal component */}
        </div>
      )}
    </div>
  );
};

export default DriverMain;
