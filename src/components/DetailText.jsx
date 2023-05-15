import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cart'

const DetailText = (props) => {
  const dispatch = useDispatch()

  const { id, name, description, price, img, brand } = props

  const addToCartHandler = () => {
    
    dispatch(addToCart(
      {
        id,
        name,
        price,
        brand,
        img,
        quantity: 1
      }
    ))
  }

  return (
    <div>
      <span className='detail_text_name'>{name}</span>
      <span className='detail_text_description'>{description}</span>
      <span className='detail_text_price'>{price}</span>
      <button type='button' className='add_to_cart_btn' onClick={addToCartHandler} >Add to Cart</button>
    </div>
  )
}

export default DetailText