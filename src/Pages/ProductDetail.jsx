import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import productArr from "../store/productArr";
import Detail from "../components/Detail";

const ProductDetail = () => {

  const params = useParams();

  const {productItems} = useSelector(state => state.products);

  const productId = params.productId;

  // console.log();
  return (
    <div>
      {
      productItems.filter((item) => {
        if (item.id === productId) return item;
      }).map((i) => (
        <Detail
        key={i.id}
          name={i.name}
          description={i.description}
          price={i.price}
          src={i.thumbnail}
          id={i.id}
          brand={i.brand}
        />
      ))}
    </div>
  );
};
// {`This is ${i.name}, ${i.brand}, ${i.description}`}

export default ProductDetail;
