import React from "react";
import { Link } from "react-router-dom";
let path = "";

export default function CardItem(props) {
  const { item } = props;
  path = "/images/uploads/" + item.foto_1;
  // console.log("item", item);
  return (
    <div className="card">
      <Link to={"/item/" + item.id}>
        <div
          className="card-bgimage"
          style={{ backgroundImage: "url(" + path + ")" }}
        >
          <div className="card-price text-light">
            {item.prijs > 0 ? "  €" + item.prijs : ""}
          </div>
        </div>
        <div className="card-body text-center">
          <p className="card-caption h4">{item.titel}</p>
          {/* <p className="text-muted">
            <small>{item.bouwjaar}</small>
          </p> */}
        </div>
      </Link>
    </div>
  );
}
