import React from 'react';
import Slider from './Slider';

const Brands = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center text-slate-800 mb-8 lg:mb-12 font-bold text-lg lg:text-2xl'>برندهای ما</h1>
                <Slider />
            </div>
        </div>
    );
};

export default Brands;