import React, { useEffect, useState } from 'react';
import PassengerNavBar from './PassengerComponents/PassengerNavBar';
import PassengerHero from './PassengerComponents/PassengerHero';
import PassengerBusLocation from './PassengerComponents/PassengerBusLocation';
import PassengerRating from './PassengerComponents/PassengerRating';
import PassengerFooter from './PassengerComponents/PassengerFooter';
import { useParams } from 'react-router-dom';
import { firestore } from '../../../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

const MainPageScreen = () => {
  const { busID } = useParams();
  const [busData, setBusData] = useState(null);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const busDocRef = doc(firestore, 'buses', busID);
        const busSnapshot = await getDoc(busDocRef);
        if (busSnapshot.exists()) {
          console.log(busSnapshot.data());
          setBusData(busSnapshot.data());
        } else {
          console.log('Bus document not found');
        }
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, [busID]);

  return (
    <div className='w-full flex flex-col'>
      <PassengerNavBar />
      <PassengerHero />
      <PassengerBusLocation busID={busID} busData={busData} />
      <PassengerRating />
      <PassengerFooter />
    </div>
  );
};

export default MainPageScreen;
