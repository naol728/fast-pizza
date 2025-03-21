import { useState } from "react";
import React from 'react'
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store"
import {formatCurrency} from "../../utils/helpers"
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigate=useNavigation()
  const isloading=navigate.state==="submitting"
  const formError=useActionData()
  const cart = useSelector(getCart);
  const {username,status:addressStatus,
    position,
    address}=useSelector(state=>state.user)
  const isloadingaddress=addressStatus==="loading"
  const dispatch=useDispatch()
const [updatename,setUpdatename]=useState()
const totalCartprice=useSelector(getTotalCartPrice)
const priorityprice=withPriority ? totalCartprice*0.2:0
const total=totalCartprice+priorityprice;
if(!cart.length) return <EmptyCart />
  return (
    <div className="py-6 px-4">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
       
      <Form method="POST">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" defaultValue={username} value={updatename} onChange={(e)=>setUpdatename(e.target.value)} name="customer" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formError?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isloadingaddress}
              defaultValue={address}
              required
            />
          </div>
          { !position?.latitude && !position?.longitude && <span className="absolute right-[3px] z-50">
         <Button type="small" disabled={isloadingaddress} onclick={(e)=> {e.preventDefault(); dispatch(fetchAddress())}}>get Address</Button>
          </span>}
          
        </div>


        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart,total)} />
          <Button disabled={isloading} type="primary">
            {isloading ? 'Placing order....' : `Order now from ${formatCurrency(total)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function actions({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  
  };

  const errors={}
  if(!isValidPhone(order.phone)){
    errors.phone="please give us your correct phone number we might need it to contact you"
  }
  if(Object.keys(errors).length> 0) return errors;
  const neworder=await createOrder(order)
  store.dispatch(clearCart())
  return redirect(`/order/${neworder.id}`);
}
export default CreateOrder;
