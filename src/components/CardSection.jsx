import React from "react";
import CardsHeader from "./CardSectionHeader";
import CardItems from "./CardItems";
import CardSectionFooter from "./CardSectionFooter";
import "./CardSection.css";

//api url
//https://localhost/api/apps/marsha/public/index.php?t=werk

export default function CardSection(props) {
  //get random 3-4 entries of the right category
  //and let them fload downward
  //super?

  return (
    <section id="{props.category}" className="bg-altlight mt-3">
      <div className="container-lg  py-3">
        <CardsHeader category={props.category} />
        <CardItems category={props.category} />
        <CardSectionFooter />
      </div>
    </section>
  );
}
