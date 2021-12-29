import React from "react";
import "./HomeCards.css";
import { useSelector } from "react-redux";
import { isEmpty } from "../assets/js/helpers";
import HomeAgendaItems from "./HomeAgendaItems";
import HomeCardsHeader from "./HomeCardsHeader";

export default function HomeAgenda() {
  const agendaData = useSelector((state) => state.agenda);

  if (isEmpty(agendaData)) {
    return "";
  }

  return (
    <section id="{props.category}" className="bg-altlight mt-3">
      <div className="container-lg py-3">
        <HomeCardsHeader category="agenda" page="home" />
        <HomeAgendaItems agenda={agendaData} />
      </div>
    </section>
  );
}
