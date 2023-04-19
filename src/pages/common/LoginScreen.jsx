import React from 'react'
import UbeLogo from '../../assets/images/UbeLogo.png'


const LoginScreen = () => {
    return (
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='hidden md:block'>
                    <img src={UbeLogo} alt="logo"/>
                </div>
                <div>
                    <h2>Form</h2>
                    </div>
            </div>
        </div>

    )
}

export default LoginScreen;