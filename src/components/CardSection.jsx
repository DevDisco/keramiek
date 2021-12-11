import React from "react";
import CardsHeader from "./CardSectionHeader";
import CardItems from "./CardItems";
import CardSectionFooter from "./CardSectionFooter";
import "./CardSection.css";

//api url
//https://localhost/api/apps/marsha/public/index.php?t=werk

export default function CardSection(category) {
  //get random 3-4 entries of the right category
  //and let them fload downward
  //super?

  return (
    <section id="nieuw" className="bg-altlight mt-3">
      <div className="container-lg">
        <CardsHeader />
        <CardItems />
        <CardSectionFooter />
      </div>
    </section>
  );
}
