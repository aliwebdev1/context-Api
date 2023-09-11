import React from 'react';

const Tshirt = ({ product, handleAddToCard }) => {
    const { img, name, price } = product;




    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{price}</p>
                <button onClick={() => handleAddToCard(product)} href="#" class="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    );
};

export default Tshirt;