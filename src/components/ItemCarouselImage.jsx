import React from "react";

const path = process.env.REACT_APP_IMAGE_DIR;

export default function ItemCarouselImage(props) {
  const { image, titel, active } = props;

  // console.log("item", item);
  return (
    <>
      {image !== "" && (
        <div className={"carousel-item " + active}>
          <div className="d-flex justify-content-center">
            <img
              src={path + image}
              alt={titel}
              className="item-carousel-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
