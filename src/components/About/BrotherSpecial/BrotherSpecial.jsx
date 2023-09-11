import React, { useContext } from 'react';
import { MoneyContext } from '../GrandFather/GrandFather';

const BrotherSpecial = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='common'>
            <h3>Vai SpecI:{money}</h3>
            <button onClick={() => setMoney(money + 100)}>Add 100</button>
        </div>
    );
};

export default BrotherSpecial;