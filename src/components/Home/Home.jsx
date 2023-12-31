import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [cart, setCart] = useState([]);
    const products = useLoaderData();

    const handleAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className=' home-container'>

            <div className='product-container'>
                {
                    products.map(product => <Tshirt
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Tshirt>)
                }

            </div>

            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>


        </div>
    );
};

export default Home;