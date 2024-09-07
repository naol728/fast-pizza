import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './ui/Home'
import Menu from './features/menu/Menu'
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/menu",
    element:<Menu />
  },
]);

export default function App() {
  const x=4;
  return <RouterProvider router={router} />
}
