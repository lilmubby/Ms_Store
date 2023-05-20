import ProductItem from "./ProductItem";
// import productArr from "../store/productArr";
import { useSelector } from "react-redux";

//

const Product = () => {

  const {productItems, searchQuery} = useSelector(state => state.products);

      
  return (
    <ul>
      {productItems.filter(items => {
        
        return items.brand.toLowerCase().includes(searchQuery.toLowerCase())
        
      })
      .map((item) => (
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
