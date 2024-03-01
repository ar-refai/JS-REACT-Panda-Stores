'use client';
import React from 'react';
import { Toast } from 'react-hot-toast';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { urlFor } from '@/lib/client';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/reduxStore/slices/cartSlice';

const Cart = ( {handleShowCart } ) => {
    const dispatch = useDispatch();
    function handleAddtoCart() {
        dispatch(addToCart());
    }
    const cartItems = useSelector(store => store.cart);


    return (
        <div className="cart-wrapper">
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading"
                    onClick={() => handleShowCart(false)}>
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">0</span>
                </button>

                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/">
                            <button
                                type="button"
                                onClick={() => handleShowCart(false)}
                                className="btn"
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className="product" >
                            <img src='' className="cart-product-image" />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <p className="quantity-desc">
                                            <span className="minus" onClick=''>
                                                <AiOutlineMinus />
                                            </span>
                                            <span className="num" onClick="">{item.quantity}</span>
                                            <span className="plus" onClick=''><AiOutlinePlus /></span>
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-item"
                                        onClick=''
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal:</h3>
                            <h3>0</h3>
                        </div>
                        <div className="btn-container">
                            <button type="button" className="btn" onClick=''>
                                Pay with Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Cart