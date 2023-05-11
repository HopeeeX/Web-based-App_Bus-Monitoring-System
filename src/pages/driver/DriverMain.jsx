import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import UploadPhoto from '../../components/Modals/UploadPhoto';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import DrawerIcon from '../../assets/icons/Menu.png'


const DriverMain = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const MainWrapper = tw.div``;

  const TripButton = tw.button`
    bg-primary fixed z-999 bottom-0 left-1/2 ml-32 transform -translate-x-2/3 sm:-translate-x-1/2 mb-16 text-white font-inter rounded-full px-4 py-2 mt-5 font-semibold hover:bg-purple-900 transition-all h-[40px] w-[280px] sm:ml-0 md:ml-32
  `;

  const ModalWrapper = tw.div`
    fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center
  `;

  const DrawerButton = tw.img`
  md:hidden cursor-pointer fixed z-999 left-0 h-[32px] w-[32px] mt-3 ml-3`;

  function ShowSidebar(){
    console.log("Hello");
  }

  return (
    <MainWrapper>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} zoomControl={false} className='fixed z-0 h-screen md:w-map sm:w-screen'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[51.505, -0.09]}>
            <Popup>
                Hi! Annyeonghaseyo.
            </Popup>
            </Marker>
            </MapContainer>
        <DrawerButton src={DrawerIcon} alt='drawer-button' onClick={ShowSidebar}/>s
        <TripButton onClick={handleOpenModal}>
          Create a Trip
        </TripButton>
      {showModal && (
        <ModalWrapper>
          <UploadPhoto onClose={handleCloseModal} /> 
        </ModalWrapper>
      )}
    </MainWrapper>
  );
};


export default DriverMain;
