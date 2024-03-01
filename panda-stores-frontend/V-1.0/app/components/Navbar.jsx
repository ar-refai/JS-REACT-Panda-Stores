'use client';
import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Logo from '@/public/assets/logo-no-background.png';
import { useDispatch, useSelector } from 'react-redux';
import Cart  from './Cart';
import { useState ,useEffect } from 'react';
useState
const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const handleShowCart = (showCart) => {
        showCart ? setShowCart(false) : setShowCart(true);
        return showCart;
    }
return (
    <>
        <div className="navbar-container">
            <p className='logo'>
                <Link href='/'>
                    <img src={Logo.src} alt="logo" width = {220} />
                </Link>
            </p>
            <button type='button' className='cart-icon' onClick={() => {handleShowCart(false)}}>
                <AiOutlineShopping color='black' />
                <span className="cart-item-qty">
                    1
                </span>
            </button>
            {showCart && (<Cart handleShowCart={handleShowCart} />)}
        </div>
    </>
    )
}

export default Navbar