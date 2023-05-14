import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/cart'


const CartBtn = (props) => {
  const dispatch = useDispatch();
  const { 
    price, 
    quantity,
    id
  } = props
  

  const addToCartHandler = () => {
    dispatch(addToCart({
      id,
      price, 
      quantity, 
    }))
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <div>
      <button className='cart_item_btn cart_plus_btn' type='button' onClick={addToCartHandler} >+</button>
      <span>{props.quantity}</span>
      <button className='cart_item_btn cart_minus_btn' type='button' onClick={removeFromCartHandler}>-</button>
    </div>
  )
}

export default CartBtn