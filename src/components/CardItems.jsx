import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

export default function CardItems(props) {
  //pass the props downwards

  const showcase = useSelector((state) => state.showcase);
  const { category } = props;
  const items = showcase[category];

  if (!items) {
    return "";
  }

  return (
    <div className="d-flex flex-wrap">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}
