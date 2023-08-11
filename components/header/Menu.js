import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <div className='hidden ml-10 lg:flex gap-6'>
            <Link href='/'>
                <h1 className='text-lg font-bold hover:text-[#045868] duration-300 cursor-pointer'>خانه</h1>
            </Link>
            <Link href='/products'>
                <h1 className='text-lg font-bold hover:text-[#045868] duration-300 cursor-pointer'>محصولات</h1>
            </Link>
            <Link href='/repair'>
                <h1 className='text-lg font-bold hover:text-[#045868] duration-300 cursor-pointer'>تعمیرات</h1>
            </Link>
            <Link href='/cart'>
                <h1 className='text-lg font-bold hover:text-[#045868] duration-300 cursor-pointer'>سبد خرید</h1>
            </Link>
        </div>
    );
};

export default Menu;