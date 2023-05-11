import ProductItem from "./ProductItem";
import productArr from "../../store/productArr";

//

const Product = () => {
  return (
    <ul>
      {productArr.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          img={item.imgSrc}
          name={item.name}
          brand={item.brand}
          price={item.price}
        />
      ))}
    </ul>
  );
};

export default Product;
