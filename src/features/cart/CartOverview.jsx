import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';

function CartOverview() {
  const totalCartQuantity=useSelector(getTotalCartItems)
  const totalCartPrice=useSelector(getTotalCartPrice)
  if(!totalCartQuantity) return null
  return (
    <div className='flex justify-between items-center bg-stone-800 text-stone-200 uppercase px-4 py-4 text-sm  sm:px-6  md:text-base'>
      <p className='text-stone-300 space-x-4 font-semibold  sm:space-x-6'>
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
