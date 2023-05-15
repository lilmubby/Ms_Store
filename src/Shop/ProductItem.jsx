import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/cart";

const ProductItem = (props) => {
const dispatch = useDispatch();

  const {id, name, brand, price, img} = props;
  

  const addToCartHandler = () => {
    // console.log(id, name, price,  brand);
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
    <>
      <li>
        <Link to={`/${id}`}>
          <div>
            <img src={img} alt={name} className="product_img" />
          </div>
          <div className="product_text">
            <span className="product_brand"> {brand} </span>
            <span className="product_name"> {name} </span>
            <span className="product_price"> {`$${price}`} </span>
          </div>
          
        </Link>
        <button type="button" onClick={addToCartHandler} className="add_to_cart_btn">
            Add to Cart
          </button>
      </li>
    </>
  );
};

export default ProductItem;
