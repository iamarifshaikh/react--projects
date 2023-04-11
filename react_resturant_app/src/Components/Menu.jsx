import React from 'react'
import '../App.css';

const Menu = ({ menuData }) => {
  return (
    <>
      <section className='main-card--cointainer'>
        {menuData.map((elements, index) => {
           const { id, name, category, image, description } = elements;
          return (
            <div className='card-container' key={id}>
              <div className='card'>
                <div className='card-body'>
                  <span className='card-number card-circle subtle'>{id}</span>
                  <span className='card-author subtle'>{name}</span>
                  <h2 className='card-title'>{name}</h2>
                  <span className='card-description subtle'>{description}</span>
                  <div className='card-read'>Read</div>
                </div>
                <img src={image} alt="images" className='card-media'/> 
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Menu