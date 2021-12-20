import React from "react";
import HomeAgendaItem from "./HomeAgendaItem";

export default function HomeAgendaItems(props) {
  //pass the props downwards

  const { agenda } = props;

  const items = agenda;

  console.log("items", items);

  return (
    <div className="d-flex flex-wrap">
      {Object.keys(items).map((item, index) => (
        <HomeAgendaItem key={items[item].id} item={items[item]} />
      ))}
    </div>
  );
}
