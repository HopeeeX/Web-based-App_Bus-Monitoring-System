import React from "react";
import UbeLogo from '../../assets/images/UbeLogo.png';
import BusDriver from '../../assets/images/BusDriver.png';
import User from '../../assets/icons/User.png';

export const LoginPage = () => {
    return(
        <div className="w-fit h-fit py-36 mx-auto">
        <div className='flex shadow-xl rounded-xl'>
            <div className='hidden md:block w-1/2'>
                <img src={UbeLogo}/>
                <img src={BusDriver}/>
            </div>

            <div className='bg-primary rounded-xl md:w-1/2'>
                <form className="sm:m-2 md:w-auto ">
                <h1 className='text-white font-bold text-4xl font-work-sans'>User Login</h1>
                <p className='font-inter text-sm text-purple-300'>Please login to continue</p>
                <div className='flex flex-col items-start '>
                    <label className='text-white font-inter font-semibold text-sm mb-1 mt-5 mr-7
                    ' htmlFor='username'>Username</label>
                    <div className='relative'>
                    <input className='border outline-none border-gray-300 rounded-lg h-10 w-80 pl-4 bg-transparent text-white font-inter' type='text' id='username' placeholder='Enter your username'/>
                    <img src={User} alt='user' className='absolute right-3 top-2' style={{height: '24px', width: '24px'}}/>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default LoginPage;