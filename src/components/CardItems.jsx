import React from "react";
import CardItem from "./CardItem";

export default function CardItems(category) {
  //pass the props downwards

  return (
    <div className="row g-4">
      <div className="col-md-6 col-lg-4 mb-3">
        <CardItem bgimage="vogel.jpg" />
      </div>
      <div className="col-lg-4 col-md-6 mb-3">
        <CardItem bgimage="keverts.jpg" />
      </div>
      <div className="col-lg-4 d-md-none d-lg-block mb-3">
        <CardItem bgimage="elephant.jpg" />
      </div>
    </div>
  );
}
