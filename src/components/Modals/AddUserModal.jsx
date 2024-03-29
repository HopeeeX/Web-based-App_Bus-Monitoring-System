/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Eye from '../../assets/icons/Eye.png';
import EyeOff from '../../assets/icons/EyeOff.png';
import User from '../../assets/icons/User.png';
import Mail from '../../assets/icons/Mail.png';
import Card from '../../assets/icons/Card.png';
import PHFlag from '../../assets/icons/Philippines.png';
import Close from '../../assets/icons/Close.png'
import SuccessfullyCreated from './SuccessfullyCreated';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../../firebase";

const AddUserModal = ({onClose, onAddUser, persona}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setMobileNumber] = useState('');
  const [license, setLicenseNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if(persona === "admins"){
    var addon = "hidden"
  } else {
    addon = ""
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true); // Set loading state to true

      // Create user with email and password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const formData = {
        name,
        email,
        ...(persona !== 'admins' && { phone, license }),
      };
      
  
      // Store user data in the "user" collection
      const userCollection = collection(firestore, persona);
      const userDocRef = doc(userCollection, user.uid);
      await setDoc(userDocRef, formData);
  
      setShowSuccess(true);
    } catch (error) {
      console.log("Error creating user:", error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  const handleSuccessClose = () => {
    onAddUser();
    setShowSuccess(false);
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
  };

  if (showSuccess) {
    return <SuccessfullyCreated onClose={handleSuccessClose} />;
  }

  return (
    <div className='bg-primary pt-2 pb-8 pl-12 pr-12 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-5/6 md:w-4/5 lg:w-[800px]'>
      <div>
        <button onClick={handleCloseModal}>
          <img src={Close} alt='close' className='w-[20px] h-[20px] absolute top-4 right-4 focus:outline-none'/>
        </button>
      </div>
      <h2 className='text-2xl md:text-4xl lg:text-[40px] font-bold text-white font-work-sans'>Add an Account</h2>
      <p className='text-white/50 font-inter text-xs md:text-sm mb-3 mt-3'>Fill up the information below</p>
      
      <form onSubmit={handleSubmit} className='w-full mt-4 flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-3 text-start text-white font-inter'>
        <div className='flex flex-col mb-4'>
          <label htmlFor='name' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Name
          </label>
          <div className='relative'>
            <input
              type='text'
              id='name'
              placeholder='Enter the name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
              required
            />
            <img src={User} className='absolute top-3 md:top-2 right-2 w-4 h-4 md:w-5 md:h-5'></img>
          </div>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='email' className='text-white mb-1 text-xs md:text-sm  font-semibold'>
            Email Address
          </label>
          <div className='relative'>
          <input
            type='email'
            placeholder='Enter the email address'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
            required
          />
          <img src={Mail} className='absolute top-3 md:top-2 right-2 w-4 h-4 md:w-5 md:h-5'></img>
          </div>
        </div>
        <div className={`flex flex-col mb-4 ${addon}`}>
          <label htmlFor='mobileNumber' className='text-white mb-1 text-xs md:text-sm  font-semibold'>
            Mobile Number
          </label>
          <div className='flex flex-row gap-2'>
            <div className='relative'>
              <input type="text" defaultValue="+63" disabled className="border border-gray-300 rounded-md pl-7 md:pl-8 h-10 px-3 w-[66px] md:w-20 bg-transparent  text-xs md:text-base" />
              <img src={PHFlag} className='absolute top-3 md:top-2 left-2 w-4 h-4 md:w-5 md:h-5'></img>
            </div>
            <input
  type='tel'
  id='mobileNumber'
  placeholder='Enter number'
  value={phone}
  onChange={(e) => setMobileNumber(e.target.value)}
  className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
  pattern='[0-9]{10}'
  maxLength='10'
  {...persona === 'admins' && 'required'}
/>
          </div>
        </div>
        <div className={`flex flex-col mb-4 ${addon}`}>
          <label htmlFor='licenseNumber' className='text-white mb-1 text-xs md:text-sm  font-semibold'>
            License Number
          </label>
          <div className='relative'>
            <input
              type='text'
              id='licenseNumber'
              placeholder='Enter license number'
              value={license}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 bg-transparent w-full text-xs md:text-sm'
              {...persona === 'admins' && 'required'}
            />
            <img src={Card} className='absolute top-3 md:top-2 right-2 w-4 h-4 md:w-5 md:h-5'></img>
          </div>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='text-white mb-1 text-xs md:text-sm font-semibold'>
            Password
          </label>
          <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 pr-10 bg-transparent w-full text-xs md:text-sm'
            required
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute top-2 right-2 focus:outline-none'
          >
            <img src={showPassword ? Eye : EyeOff} alt='Toggle Password Visibility' className='mt-1 md:mt-0 w-4 h-4 md:w-5 md:h-5' />
          </button>
          </div>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='confirmPassword' className='text-white mb-1 text-xs md:text-sm  font-semibold'>
            Confirm Password
          </label>
          <div className='relative'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id='confirmPassword'
            placeholder='Enter password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='border outline-1 outline-gray-300 border-gray-300 rounded-lg h-10 pl-4 pr-10 bg-transparent w-full text-xs md:text-sm'
            required
          />
          <button
            type='button'
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className='absolute top-2 right-2 focus:outline-none'
          >
            <img src={showConfirmPassword ? Eye : EyeOff} alt='Toggle Password Visibility' className='mt-1 md:mt-0 w-4 h-4 md:w-5 md:h-5' />
          </button>
          </div>
        </div>
        <button
          type='submit'
          className='bg-secondary place-self-center font-inter text-lg md:text-xl text-white px-4 py-2 mt-4 mb-2 text-center font-semibold rounded-2xl col-span-2 w-2/3'
          disabled={loading} // Disable the button when loading is true
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default AddUserModal;