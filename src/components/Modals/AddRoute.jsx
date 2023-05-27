/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Close from '../../assets/icons/Close.png'


const AddRoute = ({ onClose }) => {
  const [routeNumber, setRouteNumber] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className='bg-primary pt-4 pb-3 pl-10 pr-10 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-9/12 md:w-[450px]'>
      <div>
      <button onClick={handleCloseModal}>
          <img src={Close} alt='close' className='w-[20px] h-[20px] absolute top-4 right-4 focus:outline-none'/>
        </button>
      </div>
      <h2 className='text-2xl md:text-4xl lg:text-[40px] font-bold text-white font-work-sans'>Add New Route</h2>
      <p className='text-white/50 font-inter mb-5 mt-3 md:mb-0 text-xs md:text-sm'>Fill up the information below</p>
      <form onSubmit={handleSubmit} className='w-full  text-start text-white font-inter flex flex-col justify-center  md:p-8 lg:p-10'>
        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Route Number
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter number'
            value={routeNumber}
            onChange={(e) => setRouteNumber(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
        </div>

        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Origin
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter origin'
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
        </div>

        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Destination
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter destination'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
        </div>
        
        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Distance
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter distance'
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-secondary font-inter text-lg md:text-xl text-white px-4 py-2 mt-2 mb-8 md:mb-0 md:mt-7 text-center font-semibold rounded-2xl w-full'
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddRoute;