/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import InspectionModal from '../../components/Modals/InspectionModal';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent } from 'react-leaflet'
import DrawerIcon from '../../assets/icons/Menu.png'
import { UserAuth } from '../../components/Auth/Auth';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { firestore } from '../../../firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import Cookies from 'js-cookie';

const DriverMain = ({ handleSidebarToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const [onJourney, setOnJourney] = useState(false);
  const [currentTrip, setCurrentTrip] = useState(null);
  const { user } = UserAuth();
  const [busLocation, setBusLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const fetchUser = async () => {
      if (user && user.userInstance) {
        const docRef = doc(firestore, "drivers", user.userInstance.uid);
        const docSnap = await getDoc(docRef);
        setOnJourney(docSnap.data().onJourney);
        setCurrentTrip(docSnap.data().currentTrip);
      }
    }

    fetchUser();
  }, [onJourney, user])

  useEffect(() => {
    const currentBusId = Cookies.get("currentBus");

    if (currentBusId) {
      const busLocationRef = ref(getDatabase(), `buses/${currentBusId}`);

      onValue(busLocationRef, (snapshot) => {
        const { latitude, longitude } = snapshot.val();
        setBusLocation({ latitude, longitude });
      });
    } else {
      setBusLocation({ latitude: 14.587079, longitude: 120.9844868 });
    }
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const endTrip = async () => {
    Cookies.set("currentBus", '');
    const tripRef = doc(firestore, "trips", currentTrip);
    await updateDoc(tripRef, {
      timeEnd: new Date().toTimeString().slice(0, 8)
    });
    const docRef = doc(firestore, "drivers", user.userInstance.uid);
    await updateDoc(docRef, {
      onJourney: false,
      currentTrip: null
    });
    setOnJourney(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const MainWrapper = tw.div``;

  const TripButton = tw.button`
    border outline-none bg-primary fixed z-999 bottom-0 left-1/2 ml-32 transform -translate-x-2/3 sm:-translate-x-1/2 mb-16 text-white font-inter rounded-full px-4 py-2 mt-5 font-semibold hover:bg-purple-900 transition-all h-[40px] w-[280px] sm:ml-0 md:ml-32
  `;

  const ModalWrapper = tw.div`
    fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center
  `;

  const DrawerButton = tw.img`
    md:hidden cursor-pointer fixed z-999 left-0 h-[32px] w-[32px] mt-3 ml-3
  `;

  const ShowSidebar = () => {
    handleSidebarToggle();
  }

  const PanToLocation = ({ coords }) => {
    const map = useMapEvent('mouseover', () => {
      map.flyTo(coords, map.getZoom());
    });

    return null;
  };

  return (
    <MainWrapper>
      <MapContainer
        center={[busLocation.latitude, busLocation.longitude]} // Default center if bus location is not available
        zoom={40}
        scrollWheelZoom={true}
        zoomControl={false}
        className="fixed z-0 h-screen md:w-frame sm:w-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {busLocation.latitude !== 0 && busLocation.longitude !== 0 && (<>
          <PanToLocation coords={[busLocation.latitude, busLocation.longitude]} />
          <Marker position={[busLocation.latitude, busLocation.longitude]}>
            <Popup>Bus Location</Popup>
          </Marker></>

        )}
      </MapContainer>

      <DrawerButton src={DrawerIcon} alt='drawer-button' onClick={ShowSidebar} />

      {onJourney ? <TripButton onClick={endTrip}>End Trip</TripButton> : <TripButton onClick={handleOpenModal}>Create a Trip</TripButton>}

      {showModal && (
        <ModalWrapper>
          <InspectionModal onClose={handleCloseModal} />
        </ModalWrapper>
      )}
    </MainWrapper>
  );
};

export default DriverMain;
