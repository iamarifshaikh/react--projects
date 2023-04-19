import React, { useContext } from 'react'
import { PRODUCTS } from '../../Constant/Product';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import '../../styles/Cart.css'

const Cart = () => {

  const { cartItems,getTotalAmount } = useContext(ShopContext);
  
  const totalAmount = getTotalAmount();

  return (
    <div className='cart'>
      <div>
        <h1>{cartItems.length > 0 ? "Your Cart" : "Cart is empty"}</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem product={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? <div className='checkout'>
        <p>Total Amount : $  {totalAmount}</p>
                <button> Continue Shopping </button>
                <button> Checkout </button>
      </div> : ""}
    </div>
  );
};

export default Cart;