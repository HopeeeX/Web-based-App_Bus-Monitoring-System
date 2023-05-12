import React from 'react'
import UbeLogo from '../../../assets/images/UbeLogo.png'
import Mail from '../../../assets/icons/Mail.png'
import Phone from '../../../assets/icons/Phone.png'
const PassengerNavBar = () => {
  return (
    <div className='py-5 px-3 lg:px-32 w-full flex flex-row justify-between'>
        <div className='flex flex-row items-center  gap-1 lg:gap-4'>
            <img 
                src={UbeLogo} 
                alt='Ube Logo' 
                className='w-6 h-6 lg:w-9 lg:h-9'
            />
            <h3 className='text-black/90 font-semibold font-worksans text-xs lg:text-2xl '>Ube Express</h3>
        </div>
        <div className='lg:flex flex-row items-center text-navbarColorText font-inter font-semibold hidden lg:text-lg gap-1'>
            <div className='flex flex-row items-center'>
                <img 
                    src={Phone} 
                    alt='Phone Icon' 
                    className='w-5 h-5'
                />
                <h4>+(02) 8879 4497</h4>
            </div>    
            <span>|</span>        
            <div className='flex flex-row items-center'>
                <img 
                    src={Mail} 
                    alt='Mail Icon' 
                    className='w-4 h-4 brightness-50'
                />
                <h4>inquiry@ubeexpress.com</h4>
            </div> 
        </div>
    </div>
  )
}

export default PassengerNavBar