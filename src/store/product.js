import { createSlice } from "@reduxjs/toolkit";
import productArr from "./productArr";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productItems: productArr
  },
  reducers: {
    nothing(state) {

    }
  }
})

export default productSlice.reducer
export const {nothing} = productSlice.actions;