import React from "react";
import HomeCardsHeader from "./HomeCardsHeader";
import HomeCardsItems from "./HomeCardsItems";
import HomeCardsFooter from "./HomeCardsFooter";
import "./HomeCards.css";

export default function HomeCards(props) {
  const { category, page } = props;

  return (
    <section id="{props.category}" className="bg-altlight mt-3">
      <div className="container-lg  py-3">
        <HomeCardsHeader category={category} page={page} />
        <HomeCardsItems category={category} />
        <HomeCardsFooter category={category} />
      </div>
    </section>
  );
}
