import React from 'react'

import ProductItem from "../components/Shop/ProductItem";
import productArr from "../store/productArr";

const PumaPage = () => {

  const map = productArr.filter(item => {
    if (item.brand === 'Puma') return item
  });

  return (
    <ul>
      {
        map.map(item => (
          <ProductItem
          key={item.id}
          name={item.name}
          img={item.imgSrc}
          brand={item.brand}
          price={item.price}
        />
        ))
        
      }
    </ul>
  )
}

export default PumaPage