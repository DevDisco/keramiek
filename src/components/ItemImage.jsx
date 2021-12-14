import React from "react";
let path = "";

export default function ItemImage(props) {
  const { image, alt } = props;
  path = "/images/uploads/" + image;
  // console.log("item", item);
  return (
    <div className="item-image">
      {image !== "" && <img src={path} alt={alt} className="img-fluid" />}
    </div>
  );
}
