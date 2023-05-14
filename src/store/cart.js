import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addToCart (state, action) {
      
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      if (existingItem) {
        
        existingItem.price += newItem.price
        existingItem.quantity++
        
      } else{
        state.cartItems.push({
          id:newItem.id,
          name: newItem.name,
          brand: newItem.brand,
          price: newItem.price,
          img: newItem.img,
          quantity: newItem.quantity
        });
      }
      // state.totalPrice = state.cartItems.map(item => item.price).reduce((acc, curr) => acc + curr, 0)
      
    }
  }
})

export default cartSlice.reducer

export const {addToCart} = cartSlice.actions