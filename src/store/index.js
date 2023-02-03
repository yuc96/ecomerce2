import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slices/loading.slice";
import productSlice from "./slices/products.slice";
import cartSlice from "./slices/cart.slice";

export default configureStore({
  reducer: {
    loading: loadingSlice,
    product: productSlice,
    cartProducts:cartSlice,
  }
});