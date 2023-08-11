import React from 'react';
import SingleProduct from './SingleProduct'
import Slider from './Slider'

const ProductDetails = ({product}) => {
    return (
        <div className='flex flex-col gap-10 lg:flex-row'>
            <Slider product={product}/>
            <SingleProduct product={product}/>
        </div>
    );
};

export default ProductDetails;