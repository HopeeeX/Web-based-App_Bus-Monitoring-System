/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Close from '../../assets/icons/Close.png';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase';

function BusIDGenerate(number) {
  const paddedNumber = String(number).padStart(5, '0');
  return 'B' + paddedNumber;
}

const AddBus = ({ onClose, onTableRefresh }) => {
  const [plate, setPlateNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [capacity, setSittingCapacity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const counterRef = doc(firestore, "counters","buses");
      var count = (await getDoc(counterRef)).data().count + 1;
      await setDoc(counterRef, {
        count: count
      })
      const newID = BusIDGenerate(count)
      // Create a new bus document in Firestore
      const busRef = doc(firestore, 'buses', newID);
      await setDoc(busRef, {
        plate,
        brand,
        capacity
      });
  
      // Trigger the table refresh by calling the onTableRefresh prop
      onTableRefresh();
  
      // Close the modal
      onClose();
    } catch (error) {
      console.log('Error adding bus:', error);
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className='bg-primary pt-3 pb-0 pl-12 pr-12 md:pl-10 md:pr-10  rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-9/12 md:w-[450px]'>
      <div>
        <button onClick={handleCloseModal}>
          <img src={Close} alt='close' className='w-[20px] h-[20px] absolute top-4 right-4 focus:outline-none' />
        </button>
      </div>
      <h2 className='text-2xl md:text-4xl lg:text-[40px] font-bold text-white font-worksans'>Add New Bus</h2>
      <p className='text-white/50 font-inter mb-5 md:mb-0 text-xs md:text-sm'>Fill up the information below:</p>
      <form onSubmit={handleSubmit} className='w-full  text-start text-white font-inter flex flex-col justify-center md:p-8 lg:p-10'>
        <div className='flex flex-col mb-3 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Plate Number
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter the number'
            value={plate}
            onChange={(e) => setPlateNumber(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
        </div>

        <div className='flex flex-col mb-4 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Brand
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter the brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
        </div>

        <div className='flex flex-col mb-8 w-full'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Sitting Capacity
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter the capacity'
            value={capacity}
            onChange={(e) => setSittingCapacity(parseInt(e.target.value))}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
        </div>

        <button
          type='submit'
          className='rounded-xl bg-[#008000] py-2 text-white text-center font-bold font-worksans text-xs md:text-sm hover:bg-green-700 mb-4 w-full'
        >
          Add Bus
        </button>
      </form>
    </div>
  );
};

export default AddBus;
