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
      
      const newItem = action.payload; // data from component is save in the variable
      state.totalPrice += newItem.price; //increases previous price with new data price on every click
      state.totalQuantity++; // increase total quantity by 1 on every click
      // Checks if new data is already in the cart
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        // if yes, increase the quantity ONLY
        existingItem.quantity++;
        
      } else {
        // if no, push a new item into the cart
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
      
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id)
      
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
      
      state.totalQuantity--
      existingItem.quantity--
      state.totalPrice -= existingItem.price
      
    },
    deleteItemFromCart(state, action) {
      const id = action.payload; // saves the id from the component 
      // Return the cart item with the id
      const existingItem = state.cartItems.find((item) => item.id === id);
      // the product of the item price and quantity is removed from the cart
      state.totalPrice -= (existingItem.price * existingItem.quantity);
      // the item total
      state.totalQuantity -= existingItem.quantity
      // Returns cart without existing item
      state.cartItems = state.cartItems.filter(item => item.id !== id);

    }
    
  }
})

export default cartSlice.reducer

export const {addToCart, removeFromCart, deleteItemFromCart} = cartSlice.actions