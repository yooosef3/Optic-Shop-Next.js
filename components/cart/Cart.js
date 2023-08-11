import Items from './Items';
import React from 'react';
import Total from './Total';

const Cart = () => {
    return (
        <div className='lg:flex'>
            <Items />
            <Total />
        </div>
    );
};

export default Cart;