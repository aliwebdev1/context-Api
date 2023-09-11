import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';

const Uncle = () => {
    const house = useContext(RingContext);
    return (
        <div className='common'>
            <h3>Uncle:{house}</h3>
        </div>
    );
};

export default Uncle;