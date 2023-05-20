import { createSlice } from "@reduxjs/toolkit";
import productArr from "./productArr";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productItems: productArr, 
    searchQuery: ''
  },
  reducers: {
    searchItem(state, action) {
      state.searchQuery = action.payload;
    }
  }
})

export default productSlice.reducer
export const {searchItem} = productSlice.actions;