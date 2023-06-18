/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import { database } from '../../../../firebase'; // Import the Firebase database instance
import { onValue, ref } from 'firebase/database';

const PassengerBusLocation = ({ busID, busData }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const locationRef = ref(database, `buses/${busID}`);
    
    // Listen for changes in latitude and longitude
    onValue(locationRef, (snapshot) => {
      const { latitude, longitude } = snapshot.val();
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }, [busID]);

  const PanToLocation = ({ coords }) => {
    const map = useMapEvent('mouseover', () => {
      map.flyTo(coords, map.getZoom());
    });

    return null;
  };

  return (
    <div className='bg-passengerBusLocation flex flex-col gap-6 lg:flex-row font-inter px-3 lg:px-32 pt-10 pb-16 justify-between'>
      <div className='flex flex-col gap-4'>
        <h3 className='font-medium text-center text-2xl md:text-3xl lg:text-[32px] text-[#303030]'>Bus Location Update</h3>
        <div className='lg:w-[40vw] xl:w-[628px] h-96 lg:h-[451px] border-white border-8 rounded-lg'>
          <MapContainer id='map' center={[latitude, longitude]} zoom={40} scrollWheelZoom={true} zoomControl={false} className='z-0 h-full w-full'>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <PanToLocation coords={[latitude, longitude]} />
            <Marker position={[latitude, longitude]}>
              <Popup>
                Hi! Annyeonghaseyo.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className='flex flex-col gap-3 lg:gap-6 xl:gap-8 text-white text-lg lg:text-xl xl:text-2xl justify-center'>
        <div className='bg-primary/60 px-14 lg:px-18 xl:px-20 py-4 lg:py-6 xl:py-8 rounded-xl text-center'>
          <h4 className='font-bold lg:mb-3 xl:mb-5'>Bus Details</h4>
          <h4 className='font-medium lg:mb-3 xl:mb-5'>Bus Number: {busID}</h4>
          <h4 className='font-medium'>Plate Number: {busData.plate}</h4>
        </div>
        <div className='bg-primary/60 px-14 lg:px-18 xl:px-20 py-4 lg:py-6 xl:py-8 rounded-xl text-center'>
          <h4 className='font-bold lg:mb-3 xl:mb-5'>Driver Details</h4>
          <h4 className='font-medium'>Driver Name: {busData.driver}</h4>
        </div>
      </div>
    </div>
  );
};

export default PassengerBusLocation;
