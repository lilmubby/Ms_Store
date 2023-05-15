// import React , { useState } from 'react'
import { useSelector } from 'react-redux';
import ProductItem from "../Shop/ProductItem";


const NikePage = () => {
  // const [items, setItems] = useState(productArr);
  const {productItems} = useSelector(state => state.products);

  const map = productItems.filter(item => {
    if (item.brand === 'Nike') return item
  });


  return (
    <ul>
      {
        map.map(item => (
          <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.imgSrc}
          brand={item.brand}
          price={item.price}
        />
        ))
        
      }
    </ul>
  );
};

export default NikePage;
