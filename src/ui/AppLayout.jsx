import React from 'react'
import { Outlet, useNavigation, useRouteError } from 'react-router-dom'
import Header from './Header'
import Loader from './Loader'
import CartOverview from '../features/cart/CartOverview'
export default function AppLayout() {
   const navigation= useNavigation()
   const isloading=navigation.state==="loading"

  return (
    <div className='layout'>
        { isloading && <Loader />}
     <Header/>

     <main>
        <Outlet />
     </main>

     <CartOverview />
    </div>
    
  )
}
