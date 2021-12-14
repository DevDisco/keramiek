import React from "react";
import ItemCarouselButton from "./ItemCarouselButton";
import ItemCarouselImage from "./ItemCarouselImage";
import "./ItemCarousel.css";

export default function ItemCarousel(props) {
  const { item } = props;
  const { id, titel, foto_1, foto_2, foto_3, foto_4 } = item;
  const target = "icar_" + id;

  // console.log("item", item);
  return (
    <div
      id={target}
      className="carousel slide bg-primary"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <ItemCarouselButton image={foto_1} target={target} n={0} />
        <ItemCarouselButton image={foto_2} target={target} n={1} />
        <ItemCarouselButton image={foto_3} target={target} n={2} />
        <ItemCarouselButton image={foto_4} target={target} n={3} />
      </div>

      <div className="carousel-inner">
        <ItemCarouselImage image={foto_1} titel={titel} active="active" />
        <ItemCarouselImage image={foto_2} titel={titel} active="" />
        <ItemCarouselImage image={foto_3} titel={titel} active="" />
        <ItemCarouselImage image={foto_4} titel={titel} active="" />
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#" + target}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + target}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
