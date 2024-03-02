import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Logo from '../public/assets/logo-no-background.png';

import { Cart } from './';
import { useStateContext } from '../context/StateContext'
const Navbar = () => {
  // console.log('#'.repeat(55));
  // console.log(useStateContext());
  // console.log('#'.repeat(55));
  const { showCart, setShowCart, totalQuantities } = useStateContext();


  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <img src={Logo.src} alt="logo" width = {220} className='cursor-pointer' />

        </Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping color='black'/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar