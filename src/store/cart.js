import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0
  },
  reducers: {
    addToCart (state, action) {
      // console.log(action.payload);
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (existingItem) {
        state.cartItems.push({
          price: existingItem.price += newItem.price,
          quantity: existingItem.price += newItem.quantity
        })
      } else{
        state.cartItems.push({
          name: newItem.name,
          price: newItem.price,
          brand: newItem.brand,
          id:newItem.id
        });
      }

      
      console.log(state.cartItems);
      console.log(newItem);
    
      
    }
  }
})

export default cartSlice.reducer

export const {addToCart} = cartSlice.actions