import { createSlice } from "@reduxjs/toolkit";

const  initialState=JSON.parse(localStorage.getItem("heartProduct"))||[]

export const heartSlice =createSlice({
      name:'heart',
      initialState,
      reducers:{
            addproduct:(state,action)=>{
                  const isExits = state.find(p=>p.id ===action.payload.id)
                  if(!isExits){
                        state.push(action.payload)
                  }
                  localStorage.setItem("heartProduct",JSON.stringify(state))
            },
            removeproduct:(state,action)=>{
                  let newState = state.filter(p=>p.id !== action.payload.id)
                  localStorage.setItem("heartProduct",JSON.stringify(newState))
                  return newState
            },
      }
})

export const {addproduct,removeproduct } =heartSlice.actions
export default heartSlice.reducer
