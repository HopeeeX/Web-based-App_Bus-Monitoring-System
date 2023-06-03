import React from 'react'
import PassengerNavBar from './PassengerComponents/PassengerNavBar'
import PassengerHero from './PassengerComponents/PassengerHero'
import PassengerBusLocation from './PassengerComponents/PassengerBusLocation'
import PassengerRating from './PassengerComponents/PassengerRating'
import PassengerFooter from './PassengerComponents/PassengerFooter'
import {useParams} from "react-router-dom";
const MainPageScreen = () => {
  const {busID} = useParams();
  console.log(busID);
  return (
    <div className='w-full flex flex-col'>
        <PassengerNavBar/>
        <PassengerHero/>
        <PassengerBusLocation/>
        <PassengerRating/>
        <PassengerFooter/>
    </div>
    
  )
}

export default MainPageScreen