import React from "react";
let path = "";

export default function CardItem(props) {
  path = "/images/uploads/" + props.bgimage;
  console.log(path);
  return (
    <div className="card">
      <div
        className="card-bgimage"
        style={{ backgroundImage: "url(" + path + ")" }}
      ></div>
      <div className="card-body">
        <p className="card-caption">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
