import React, { useState } from 'react';


const AddBus = ({ onClose }) => {
  const [plateNumber, setPlateNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [sittingCapacity, setSittingCapacity] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    onClose();
  };

  return (
    <div className='bg-purple-900 p-7 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-[450px]'>
      <h2 className='text-[40px] font-bold text-white font-worksans'>Add New Bus</h2>
      <p className='text-white/50 font-inter text-sm '>Fill up the information below:</p>
      <form onSubmit={handleSubmit} className='w-full  text-start text-white font-inter flex flex-col justify-center p-10'>
        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-sm font-semibold'>
            Plate Number
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter the number'
            value={plateNumber}
            onChange={(e) => setName(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full'
            required
          />
        </div>

        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-sm font-semibold'>
            Brand
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter the brand'
            value={brand}
            onChange={(e) => setName(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full'
            required
          />
        </div>
        
        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-sm font-semibold'>
            Sitting Capacity
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter the sitting capacity'
            value={sittingCapacity}
            onChange={(e) => setName(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-secondary font-inter text-xl text-white px-4 py-2 mt-8 mb-4 text-center font-semibold rounded-2xl  w-full'
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddBus;