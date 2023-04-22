import { useState} from 'react';
import UbeLogo from '../../assets/images/UbeLogo.png';
import BusDriver from '../../assets/images/BusDriver.png';
import User from '../../assets/icons/User.png';
import Eye from '../../assets/icons/Eye.png';
import EyeOff from '../../assets/icons/EyeOff.png';
import {Link} from 'react-router-dom'

const LoginScreen = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Do something when the login button is clicked
    };

    return (
    <div className='w-full h-screen flex items-center'>
        <div className='grid grid-cols-2 m-auto shadow-xl rounded-xl overflow-hidden'style={{width:'1057px', height: '661px'}}>
        <div className='hidden md:flex flex-col justify-center items-center'>
            <img src={UbeLogo} alt='logo' style={{ height: '138px' }} />
            <img src={BusDriver} alt='bus-driver' style={{ height: '437.48px', width: '400px'}} />
        </div>
        <div className='flex flex-col items-center justify-center bg-primary rounded-tr-xl rounded-br-xl overflow-hidden '>
            <form className='flex flex-col items-center'>
                <h1 className='text-white font-bold text-4xl font-work-sans text-center mb-3'>User Login</h1>
                <p className='font-inter text-sm text-center text-purple-300'>Please login to continue</p>
                <div className='flex flex-col items-start '>
                    <label className='text-white font-inter font-semibold text-sm mb-1 mt-5 mr-7
                    ' htmlFor='username'>Username</label>
                    <div className='relative'>
                    <input className='border outline-none border-gray-300 rounded-lg h-10 w-80 pl-4 bg-transparent text-white font-inter' type='text' id='username' placeholder='Enter your username'/>
                    <img src={User} alt='user' className='absolute right-3 top-2' style={{height: '24px', width: '24px'}}/>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <label className='text-white font-inter font-semibold text-sm mb-1 mt-5' 
                        htmlFor='password'>Password</label>
                    <div className='relative'>
                    <input className='border outline-none border-gray-300 rounded-lg h-10 w-80 pl-4 bg-transparent text-white font-inter' type={isPasswordVisible ? 'text': 'password'} id='password' placeholder='Enter your password'/>
                    <img src={isPasswordVisible ? Eye : EyeOff} alt='eye' className='absolute right-3 top-2' style={{height: '24px', width: '24px', cursor: 'pointer'}} onClick={togglePasswordVisibility}/>
                    </div>
                    <div className='mt-2 ml-auto text-sm text-left text-purple-300'>
                        <Link to="/forgot">Forgot your Password?</Link>
                    </div>
                </div>
                <button type='submit' className='bg-secondary text-white font-inter rounded-full px-4 py-2 mt-5 font-semibold hover:bg-gray-500' style={{height: '40px', width: '280px'}} onClick={handleLogin}>Login</button>
            </form>
        </div>
        </div>
    </div>
    );
};

export default LoginScreen;

