import React from "react";
import ItemCarousel from "./ItemCarousel";
import "./ItemSection.css";
import ItemTable from "./ItemTable";

export default function ItemSection(props) {
  const { item } = props;

  return (
    <section id="{props.category}" className="bg-altlight mt-3">
      <div className="container">
        <h1>{item.titel}</h1>
        <p>{item.beschrijving}</p>
        <ItemTable item={item} />
        <p></p>
        <ItemCarousel item={item} />
      </div>
    </section>
  );
}
