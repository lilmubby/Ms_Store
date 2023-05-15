import React from "react";
import DetailPics from "./DetailPics";
import DetailText from "./DetailText";

const Detail = ({ src, id, name, description, price, brand }) => {

  const img =src[0]
  return (
    <div>
      <DetailPics src={src} id={id} />
      <DetailText
        name={name}
        description={description}
        price={price}
        img={img}
        id={id}
        brand={brand}
      />
    </div>
  );
};

export default Detail;
