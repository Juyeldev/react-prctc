import React from 'react';
import { addToDB, removeDB } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    const addToCart = () => {
        addToDB(id)
    }
    const addToCartWithPara = () => addToCart(id);
    const removeCart = () => {
        removeDB(id)
    }
    return (
        <div className='products'>
            <h2>Buy This: {name}</h2>
            <p>Only for: {id}</p>
            {/* <button onClick={addToCartWithPara}>Add To Cart</button> */}

            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeCart(id)}>Remove</button>

        </div>
    );
};

export default Cosmetic;