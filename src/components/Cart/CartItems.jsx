import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../store/cart";
import CartBtn from "./CartBtn";

const CartItems = (props) => {
  
  const dispatch = useDispatch();

  const { name, brand, price, quantity, img, id } = props;

  const deleteItemBtnHandler = () => {
    dispatch(deleteItemFromCart(id))
    console.log
  }

  return (
    <li>
      <img src={img} alt="" className="cart_img" />
      <span className="">{name + " "}</span>
      <span className="">{brand + " "}</span>
      <span className="">{price + "  X "}</span>
      <span className="">{quantity + " = "}</span>
      <span className="">{price * quantity}</span>
      <button className="delete_btn" type="button" onClick={deleteItemBtnHandler}>
      <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
      <CartBtn
        quantity={quantity}
        name={name}
        brand={brand}
        price={price}
        img={img}
        id={id}
      />
    </li>
  );
};

export default CartItems;
