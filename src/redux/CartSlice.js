import { createSlice } from '@reduxjs/toolkit'

const initialState =JSON.parse(localStorage.getItem("cart"))||[]

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const isExits =state.find(p=>p.id === action.payload.id)
      if(isExits){
        isExits.quantity++;
      }else{
        state.push({...action.payload,quantity:1})
      }
      localStorage.setItem("cart",JSON.stringify(state))
      
    },
    removefromCart: (state,action) => {
       let newState =state.filter(p=>p.id !== action.payload.id)
       localStorage.setItem("cart",JSON.stringify(newState))
       return newState;
    },
    decrementQuantity:(state,action)=>{
      const isExits =state.find(p=>p.id === action.payload.id)
      isExits && isExits.quantity--;
      localStorage.setItem("cart",JSON.stringify(state))
    }
  },
})

// Action creators are generated for each case reducer function
export const { decrementQuantity,addToCart, removefromCart } = CartSlice.actions

export default CartSlice.reducer