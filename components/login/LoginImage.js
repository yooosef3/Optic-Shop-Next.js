import Image from 'next/image'
import React from 'react';
import login from '../../public/images/bg_1.jpg.webp'

const LoginImage = () => {
    return (
        <div className='hidden lg:block w-[50%] h-[100vh]'>
            <Image className='h-full object-cover' src={login} width={700} height={700} alt='Login'/>
        </div>
    );
};

export default LoginImage;