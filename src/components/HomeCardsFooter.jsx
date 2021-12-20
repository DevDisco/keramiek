import React from "react";
import { Link } from "react-router-dom";

export default function HomeCardsFooter(props) {
  return (
    <div className="text-center">
      <Link to={"c/" + props.category} className="btn btn-primary">
        Verder kijken
      </Link>
    </div>
  );
}
