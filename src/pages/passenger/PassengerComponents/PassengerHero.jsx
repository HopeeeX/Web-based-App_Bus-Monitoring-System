import React from 'react'
import BusUbe from '../../../assets/images/HeroPassenger.png'
const PassengerHero = () => {
  return (
    
    <div className='text-center'>
        <h2 className='font-semibold text-black font-inter mb-3 lg:mb-5 text-xl lg:text-[40px]'>Your Ultimate Bus Experience</h2>
        <div>
          <img 
            src={BusUbe}
            
          />
        </div>
    </div>
  )
}

export default PassengerHero