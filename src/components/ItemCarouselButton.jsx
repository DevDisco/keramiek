import React from "react";

export default function ItemCarouselButton(props) {
  const { image, target, n } = props;

  return (
    <>
      {image !== "" && image !== undefined && (
        <button
          type="button"
          data-bs-target={"#" + target}
          data-bs-slide-to={n}
          className="active"
        ></button>
      )}
    </>
  );
}
