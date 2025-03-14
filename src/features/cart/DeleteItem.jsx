import React from 'react'
import Button from '../../ui/Button'
import { deleteItem } from './cartSlice'
import { useDispatch } from 'react-redux'

export default function DeleteItem({pizzaId}) {
    const dispatch=useDispatch()
  return (
    <Button type="small" onclick={()=>dispatch(deleteItem(pizzaId)) }>Delete</Button>
  )
}
