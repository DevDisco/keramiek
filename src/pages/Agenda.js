import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import AgendaItem from "../components/AgendaItem";

export default function Agenda() {
  const { id } = useParams();
  const agenda = useSelector((state) => state.agenda);
  const item = agenda[id];

  if (!item) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return <AgendaItem item={item} />;
}
