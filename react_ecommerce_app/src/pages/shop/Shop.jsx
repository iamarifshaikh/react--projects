import React from 'react'
import { PRODUCTS } from '../../Constant/Product';
import Product from './Product';
import '../../styles/Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Bazar</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => {
          return (
            <Product product={product} />
          )
        })}
      </div>
    </div>
  );
};

export default Shop;