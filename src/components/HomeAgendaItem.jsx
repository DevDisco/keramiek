import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editAgenda } from "../assets/js/helpers";

export default function HomeAgendaItem(props) {
  const clientData = useSelector((state) => state.client);

  if (!clientData) {
    return "";
  }

  const { ip } = clientData;
  const { item } = props;
  const imageUrl = process.env.REACT_APP_IMAGE_DIR + item.foto_1;

  return (
    <div className="card" onClick={(e) => editAgenda(item.id, ip, e)}>
      <Link to={"/a/" + item.id}>
        <div
          className="card-bgimage"
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        >
          <div className="card-price text-light">
            {item.prijs > 0 ? "  €" + item.prijs : ""}
          </div>
        </div>
        <div className="card-body text-center pb-0">
          <p className="card-caption h4">{item.titel}</p>
        </div>
      </Link>
    </div>
  );
}
