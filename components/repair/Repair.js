import Form from './Form'
import React from 'react';
import background from '../../public/images/pexels-felipe-ferreira-701877.jpg'

const Repair = () => {
    return (
        <div className='bg-no-repeat bg-cover' style={{backgroundImage: `url(${background.src})`}}>
            <Form />
        </div>
    );
};

export default Repair;