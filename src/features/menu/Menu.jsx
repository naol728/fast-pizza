import React from 'react'
import {getMenu }from '../../services/apiRestaurant'
import { useLoaderData } from 'react-router-dom';
import Menuitem from './MenuItem'
function Menu() {
 const menu= useLoaderData()
 console.log(menu)
  return <ul className='divide-y-2 pl-2'>
  {menu.map((pizza)=><Menuitem pizza={pizza} key={pizza.id} />)}
  </ul>;
}
export async function loader(){
  const menu=await getMenu()
  return menu;
}
export default Menu;
