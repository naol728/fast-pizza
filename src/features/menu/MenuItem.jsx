import React from 'react'
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
function MenuItem({ pizza }) {
const dispach=useDispatch()
  const { pizzaId, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity=useSelector(getCurrentQuantityById(pizzaId))
  const incart=currentQuantity >0
function handleAddtocart(){
 const newItem={
  pizzaId:pizzaId,
  name,
  quantity:1,
  unitPrice,
  totalPrice:unitPrice*1,

}
dispach(addItem(newItem))
}

  return (
    <li className='flex gap-4 py-2'>
      <img className={`max-h-24 ${soldOut ?"opacity-70 grayscale":""}`} src={imageUrl} alt={name} />
      <div className='flex flex-col grow'>
        <p className='font-medium'>{name}</p>
        <p className='capitalize text-sm text-stone-500 italic'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> : <p className='text-sm font-medium text-stone-500 uppercase'>Sold out</p>}

        { incart  && 
        <div className='flex items-center gap-3 sm:gap-8'>
          <UpdateItemQuantity pizzaId={pizzaId}  />
          <DeleteItem pizzaId={pizzaId}/>
        </div> }
          {!soldOut && !incart && <Button type="small" onclick={handleAddtocart} >Add to Cart</Button>}
        </div>
 
      </div>
    </li>
  );
}

export default MenuItem;
