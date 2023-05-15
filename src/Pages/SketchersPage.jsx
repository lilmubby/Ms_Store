import React from 'react'

import ProductItem from '../Shop/ProductItem';

import productArr from '../store/productArr';

const NewBalancePage = () => {

  const map = productArr.filter(item => {
    if (item.brand === 'sketchers') return item
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
  )
}

export default NewBalancePage