import React, { useState } from "react";
import UbeImg from '../../assets/images/UbeImg.jpg';
import User from '../../assets/icons/User.png';
import Eye from '../../assets/icons/Eye.png';
import EyeOff from '../../assets/icons/EyeOff.png';
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from "../../components/Auth/Auth";

    const LoginPage = () => {
        const {signIn} = UserAuth();
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                await signIn(email, password);
            } catch(e){
                console.log(e.message)
            }
        }

        
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);

        const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };


    return(
        <div className="w-full h-screen flex">
            <div className="grid grid-cols-1 md:grid-cols-2 m-auto md:h-[550px] shadow-lg rounded-lg sm:max-w-[900px] sm:h-[420px]">
                <div className="w-[380px] h-[550px] hidden md:block">
                <img src={UbeImg} alt='logo' className="p-3 mt-6 ml-2"/>
                </div>

                <div className="bg-primary flex flex-col justify-center shadow-lg rounded-lg p-5">
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-white font-bold text-4xl font-work-sans text-center mb-3'>User Login</h1>
                        <p className='font-inter text-sm text-center text-purple-300 pb-2 '>Please login to continue</p>
                    <div className='flex flex-col items-start sm:m-2 md:ml-7'>
                    <label className='text-white font-inter font-semibold text-sm mb-1 mt-5 mr-7
                    ' htmlFor='username'>Username</label>
                    <div className='relative'>
                    <input className='border outline-none border-gray-300 rounded-lg h-10 w-72 pl-4 bg-transparent text-white font-inter' type='text' id='username' placeholder='Enter your username' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <img src={User} alt='user' className='absolute right-3 top-2' style={{height: '24px', width: '24px'}}/>
                    </div>
                </div>
                <div className='flex flex-col items-start sm:m-2 md:ml-7'>
                    <label className='text-white font-inter font-semibold text-sm mb-1 mt-5' 
                        htmlFor='password'>Password</label>
                    <div className='relative'>
                    <input className='border outline-none border-gray-300 rounded-lg h-10 w-72 pl-4 bg-transparent text-white font-inter' type={isPasswordVisible ? 'text': 'password'} id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <img src={isPasswordVisible ? Eye : EyeOff} alt='eye' className='absolute right-3 top-2' style={{height: '24px', width: '24px', cursor: 'pointer'}} onClick={togglePasswordVisibility}/>
                    </div>
                    <div className='mt-2 ml-auto text-sm text-left md:mr-5 text-purple-300'>
                        <Link to="/forgot">Forgot your Password?</Link>
                    </div>
                </div>
                <button type='submit' className='bg-secondary text-white font-inter rounded-full px-4 py-2 mt-3 font-semibold hover:bg-gray-500 sm:ml-2.5 md:ml-8' style={{height: '40px', width: '280px'}}>Login</button>
                    </form>
                </div>
            </div>
        </div>  
    )
}

export default LoginPage;