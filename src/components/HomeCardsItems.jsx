import React from "react";
import { useSelector } from "react-redux";
import HomeCardsItem from "./HomeCardsItem";

export default function HomeCardsItems(props) {
  //pass the props downwards

  const showcase = useSelector((state) => state.showcase);
  const { category } = props;
  const items = showcase[category];

  if (!items) {
    return "";
  }

  //console.log("items", items);

  return (
    <div className="d-flex flex-wrap">
      {items.map((item) => (
        <HomeCardsItem key={item.id} item={item} />
      ))}
    </div>
  );
}
