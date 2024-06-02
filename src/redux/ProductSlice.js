import { createSlice } from '@reduxjs/toolkit';
import data from '../asset/data/products'
export const ProductSlice=createSlice({
      name:"products",
      initialState:data,
      reducers:{

      }
})
export default ProductSlice.reducer;