import { Link } from "react-router-dom"

const ProductItem = (props) => {
  return (
    <>
      <li>
        <Link to={`/${props.id}`}>
        <div>
          <img src={props.img} alt={props.name} className='product_img' />
        </div>
        <div className='product_text'>
          <span className='product_brand' > {props.brand} </span>
          <span className='product_name' > {props.name} </span>
          <span className="product_price"> {`$${props.price}`} </span>
        </div>
        </Link>
      </li>
    </>
  )
}

export default ProductItem