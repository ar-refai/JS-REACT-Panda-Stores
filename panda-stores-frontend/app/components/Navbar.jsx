import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Logo from '@/public/assets/logo-no-background.png';
const Navbar = () => {
return (
    <div className="navbar-container">
        <p className='logo'>
            <Link href='/'>
                <img src={Logo.src} alt="logo" width = {220} />
            </Link>
        </p>
        <button type='button' className='cart-icon' onClick=''>
            <AiOutlineShopping color='black' />
            <span className="cart-item-qty">
                1
            </span>
        </button>
    </div>

    )
}

export default Navbar