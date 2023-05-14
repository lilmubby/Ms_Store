import React from "react";
import DetailPics from "./DetailPics";
import DetailText from "./DetailText";

const Detail = ({ src, id, name, description, price }) => {
  return (
    <div>
      <DetailPics src={src} id={id} />
      <DetailText name={name} description={description} price={price} />
    </div>
  );
};

export default Detail;
