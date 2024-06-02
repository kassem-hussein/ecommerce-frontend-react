import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import heartSlice from "./heartSlice";
import ProductSlice from "./ProductSlice";
import userSilce from "./userSilce";
const store =configureStore({
      reducer:{
       "cart":CartSlice,
       "heart":heartSlice,
       "products":ProductSlice,
       'user':userSilce
      }
})
export default store