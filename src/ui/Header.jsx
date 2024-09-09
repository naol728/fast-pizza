import React from 'react'
import { Link } from 'react-router-dom'
import Searchorder from '../features/order/Searchorder'
import Username from '../features/user/Username'

export default function Header() {
  return (
    <header className='flex justify-between items-center  bg-yellow-500 border-b-2 border-stone-200 px-4 py-3'>
      
      <Link to="/" className='tracking-widest'>React Fast pizza co.</Link>


      <Searchorder />
       <Username />
    </header>
  )
}
