import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const Product = ({ product }) => {
    
    const { id, productName, price, productImage } = product;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className='product'>
            <img src={productImage} />
            <div className='description'>
                <h3>{productName}</h3>
                <p>$ {price}</p>
            </div>
            <button
                className='addToCartBttn'
                onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    );
};

export default Product;