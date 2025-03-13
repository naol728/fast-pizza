import { Link } from 'react-router-dom';
import React from 'react'
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from "./EmptyCart"

function Cart() {
  const cart = useSelector(getCart);
  const username= useSelector(state=>state.user.username)
  const dispach=useDispatch()

  if(cart.length==0) return <EmptyCart />
  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 font-semibold text-xl'>Your cart,{username}</h2>
      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map(item=><CartItem item={item} key={item.pizzaId}/>)}
      </ul>
      <div className='mt-7 space-x-2'>
        <Button to="/order/new" type="primary" >Order pizzas</Button>
        <Button type="secondary" onclick={()=>dispach(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
