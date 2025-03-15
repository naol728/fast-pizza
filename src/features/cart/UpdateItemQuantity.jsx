import React from 'react'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { DeacreaseItemQuantity, getCurrentQuantityById, IncearseItemQuantity } from './cartSlice'

export default function UpdateItemQuantity({pizzaId}) {
    const dispatch=useDispatch()
    const currentItems=useSelector(getCurrentQuantityById(pizzaId))
  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button type="round" onclick={()=>dispatch(DeacreaseItemQuantity(pizzaId))}>-</Button>
      <span className="font-medium font-xs">{currentItems}</span>
      <Button type="round" onclick={()=>dispatch(IncearseItemQuantity(pizzaId))} >+</Button>
    </div>
  )
}
