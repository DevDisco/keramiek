import React from "react";
import ItemCarousel from "./ItemCarousel";
import "./ItemSection.css";
import AgendaItemTable from "./AgendaItemTable";

export default function AgendaItem(props) {
  const { item } = props;

  return (
    <section id="{props.category}" className="bg-altlight mt-3">
      <div className="container">
        <h1>{item.titel}</h1>
        <p className="lnbrk">{item.beschrijving}</p>
        <AgendaItemTable item={item} />
        <p></p>
        <ItemCarousel item={item} />
      </div>
    </section>
  );
}
