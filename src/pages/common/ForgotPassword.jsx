import React from "react";
import Mail from '../../assets/icons/Mail.png'
import {Link} from 'react-router-dom'


    const ForgotPassword = () => {

        const handleLogin = (e) => {
            e.preventDefault();
            // Do something when the login button is clicked
        };

    return(
        <div className='w-full h-screen flex items-center'>
            <div className='bg-primary m-auto rounded-xl overflow-hidden shadow-xl w-[300px] h-[350px] md:w-[400px] md:h-[380px]'>
                <form className="flex flex-col justify-center p-3 mt-4 md:p-5">
                <h1 className='text-white font-bold text-[30px] md:text-[40px] font-work-sans text-center mb-1 mt-3 md:mt-1'>Forgot Password?</h1>
                <p className='font-inter sm:text-[8px] md:text-[11px] text-center text-purple-300 pl-16 pr-16'>Enter the email address associated with your account</p>
                <div className="flex flex-col justify-center m-auto">
                    <label className='text-white font-inter text-[12px] mt-6 mb-1' htmlFor='email'>Email Address</label>
                    <div className="relative">
                    <input className='border outline-none border-gray-300 bg-transparent text-white rounded-lg h-8 pl-4 w-[250px]' type="text" id="email" placeholder="Enter email address"></input>
                    <img src={Mail} className="absolute right-3 top-1.5 md:top-1 w-[20px] h-[20px] md:h-[24px] md:w-[24px]"/>
                    </div>
                </div>
                <div className="mx-auto">
                <button type='submit' className='bg-secondary text-white text-center font-inter rounded-full mt-4 font-semibold hover:bg-gray-500 w-[250px] h-[35px] md:w-[255px]' onClick={handleLogin}>Send Reset Link</button>
                </div>
                <div className='mt-12 text-sm font-semibold text-center text-white'>
                        <Link to="/">Back to Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;