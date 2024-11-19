import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart:[{
        pizzaID:12,
        name:"medirtanian",
        quantity:2,
        unitPrice:16,
        totalPrice:32,

    }]
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