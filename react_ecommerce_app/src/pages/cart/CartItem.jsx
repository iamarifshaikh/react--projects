import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const CartItem = ({ product }) => {
    const { id, productName, price, productImage } = product;
    const { cartItems, addToCart, removeFromCart, updateItemCount } = useContext(ShopContext)
    
    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='description'>
                <h3>{productName}</h3>
                <p>${price}</p>
            </div>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateItemCount(Number(e.target.value),id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>

        </div>
    );
};

export default CartItem;