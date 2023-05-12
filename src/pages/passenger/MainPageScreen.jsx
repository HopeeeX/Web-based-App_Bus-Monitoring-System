import React from 'react'
import PassengerNavBar from './PassengerComponents/PassengerNavBar'
import PassengerHero from './PassengerComponents/PassengerHero'
import PassengerBusLocation from './PassengerComponents/PassengerBusLocation'
import PassengerRating from './PassengerComponents/PassengerRating'
import PassengerFooter from './PassengerComponents/PassengerFooter'
const MainPageScreen = () => {
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