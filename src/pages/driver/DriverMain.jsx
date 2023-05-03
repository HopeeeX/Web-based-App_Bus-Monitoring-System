import React, { useState } from 'react';
import Map from '../../components/Map';
import tw from 'tailwind-styled-components';
import InspectionModal from '../../components/Modals/InspectionModal';

const DriverMain = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const MainWrapper = tw.div`
    w-full h-full relative
  `;

  const Container = tw.div`
    relative
  `;

  const TripButton = tw.button`
    bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 text-white font-inter rounded-full px-4 py-2 mt-5 font-semibold hover:bg-purple-900 transition-all h-[40px] w-[280px]
  `;

  const ModalWrapper = tw.div`
    fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center
  `;


  return (
    <MainWrapper>
      <Container>
        <Map />
        <TripButton onClick={handleOpenModal}>
          Create a Trip
        </TripButton>
      </Container>
  {showModal && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center'>
          <InspectionModal onClose={handleCloseModal} /> 
        </div>
      )}

    </MainWrapper>
  );
};


export default DriverMain;
