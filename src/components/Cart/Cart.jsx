import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, totalQuantity, totalPrice } = cart;

  return (
    <>
        {cartItems.length === 0 && <p>There is nothing in Cart</p>}
      <ul>
        {cartItems.length > 0 &&cartItems.map((item) => (
          <CartItems
            key={item.id}
            name={item.name}
            brand={item.brand}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
          />
        ))}
      </ul>
      <span>Total Quantity: {totalQuantity + " "}</span>
      <span>Sub Total: {totalPrice}</span>
    </>
  );
};

export default Cart;
