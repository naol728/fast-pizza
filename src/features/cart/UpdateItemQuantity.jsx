import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { DeacreaseItemQuantity, IncearseItemQuantity } from './cartSlice'

export default function UpdateItemQuantity({pizzaId}) {
    const dispatch=useDispatch()
  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button type="round" onclick={()=>dispatch(DeacreaseItemQuantity(pizzaId))}>-</Button>
      <Button type="round" onclick={()=>dispatch(IncearseItemQuantity(pizzaId))} >+</Button>
    </div>
  )
}
