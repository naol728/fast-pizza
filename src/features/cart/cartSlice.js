import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart:[]
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state,action){
            // paylaod =newitem
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
            //payload=itemid
            state.cart=state.cart.filter(item=>item.pizzaID!== action.payload)
        },
        IncearseItemQuantity(state,action){
            const item=state.cart.find((item)=>item.pizzaID===action.payload)
            item.quantity++;
            item.totalPrice=item.quantity*item.unitPrice
        },
        DeacreaseItemQuantity(state,action){
            const item=state.cart.find((item)=>item.pizzaID===action.payload)
            item.quantity--;
            item.totalPrice=item.quantity*item.unitPrice
        },
        clearCart(state){
            state.cart=[]
        },
    }
})
export const {addItem,deleteItem,IncearseItemQuantity,DeacreaseItemQuantity,clearCart}=cartSlice.actions
export default cartSlice.reducer;
export const getCart=state=>state.cart.cart;
export const getTotalCartItems=(state)=>state.cart.cart.reduce((sum,item)=>sum+item.quantity,0)
export const getTotalCartPrice=(state)=>state.cart.cart.reduce((sum,item)=>sum+item.totalPrice,0)