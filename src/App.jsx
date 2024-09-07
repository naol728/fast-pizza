import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './ui/Home'
import Error from './ui/Error'
import Menu,{loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreatOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
import AppLayout from './ui/AppLayout'
const router =createBrowserRouter([

  {
    element:<AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/menu",
        element:<Menu />,
        loader:menuLoader,
        errorElement:<Error />,
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/order/new",
        element:<CreatOrder />
      },
      {
        path:"/order/:orderId",
        element:<Order />
      }
    ]
  }
]);

export default function App() {
  const x=4;
  return <RouterProvider router={router} />
}
