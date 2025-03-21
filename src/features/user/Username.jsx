import React from 'react'
import { useSelector } from 'react-redux'

export default function Username() {
   const username=useSelector(state=>state.user.username)
if(!username ) return;
  return (
    <div className='text-sm font-semibold hidden md:block '>
     {username}
    </div>
  )
}
