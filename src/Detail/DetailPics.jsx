import React, { useState } from "react";

const DetailPics = (props) => {
  const [imgIndex, setImgIndex] = useState(0);
  // console.log(props.src);

  // const imgHandler = () => {
    
  // }

  return (
    <div>
      <img
        src={props.src[imgIndex]}
        alt="Product Image"
        className="product_detail_img"
      />
      <div className="thumbnail_container">
        {props.src.map((thumb, index) => (
          <button
            key={index}
            type="button"
            className="product_detail_thumbs_btn"
            onClick={() => {
              setImgIndex(index)
            }}
          >
            <img
              src={thumb}
              alt="Product Image"
              className="product_detail_thumbs"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DetailPics;
