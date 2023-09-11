import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';

const FutiSister = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div className='common'>
            <h3>Sister :</h3>
            <button onClick={() => setHouse(house + 1)}>House Increse</button>
        </div>
    );
};

export default FutiSister;