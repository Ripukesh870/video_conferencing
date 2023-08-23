import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        AddToCart:(state,action)=>{
            const itemIndex=state.cart.findIndex((item)=>item.id === action.payload.id)
            console.log(itemIndex)
            if(itemIndex>=0)
            {
                state.cart[itemIndex].qnty+=1;
            } else {
                const temp={...action.payload,qnty:1}
                state.cart=[...state.cart,temp]
            }

        },
        RemoveToCart:(state,action)=>{
            const data=state.cart.filter((ele)=>ele.id!==action.payload);
            state.cart=data;
        },
        RemoveSingleItem:(state,action)=>{
            const itemIndex_dec=state.cart.findIndex((item)=>item.id === action.payload.id)
            if(itemIndex_dec>=0)
            {
                state.cart[itemIndex_dec].qnty-=1;
            }
        },
        emptyCart:(state,action)=>{
            state.cart=[]
        }
    }
})

export const {AddToCart,RemoveToCart,RemoveSingleItem,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;