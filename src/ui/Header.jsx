import React from 'react'
import { Link } from 'react-router-dom'
import Searchorder from '../features/order/Searchorder'

export default function Header() {
  return (
    <header>
      
      <Link to="/">React Fast pizza co.</Link>


      <Searchorder />

    </header>
  )
}
