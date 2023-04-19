import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import '../styles/Navbar.css';

export const Navbar = () => {
        return (
        <div className='navbar'>
            <div className='links'>
                <Link to="/"> Shop </Link>
                <Link to="/cart"><ShoppingCart size={40} color="#fcfcfc" weight="duotone" /></Link>
            </div>
        </div>
      
    );
};