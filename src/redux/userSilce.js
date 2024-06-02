import { createSlice } from "@reduxjs/toolkit";

export const  userSlice =createSlice({
      name:'user',
      initialState:JSON.parse(localStorage.getItem('user'))||{},
      reducers:{
            addInfo:(state,action)=>{
                  localStorage.setItem('user',JSON.stringify(action.payload))
                  return action.payload
            }

      }

}) 
export const {addInfo} =userSlice.actions
export default userSlice.reducer