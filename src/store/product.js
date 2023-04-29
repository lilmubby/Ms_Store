import { createSlice } from "@reduxjs/toolkit";
import productArr from "./productArr";

const productSlice = createSlice({
  name: 'product',
  initialState: productArr,

})

export default productSlice.reducer;