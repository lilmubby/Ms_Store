import React from "react";
import { useParams } from "react-router-dom";

import productArr from "../store/productArr";
import Detail from "../Detail/Detail";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;
  const map = productArr.filter((item) => {
    if (item.id === productId) return item;
  });
  // console.log(map);
  return (
    <div>
      {map.map((i) => (
        <Detail
        key={i.id}
          name={i.name}
          description={i.description}
          price={i.description}
          src={i.thumbnail}
          id={i.id}
        />
      ))}
    </div>
  );
};
// {`This is ${i.name}, ${i.brand}, ${i.description}`}

export default ProductDetail;
