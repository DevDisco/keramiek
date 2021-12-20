import React from "react";
import { useSelector } from "react-redux";
import "./Banner.css";
import { isEmpty, editTag } from "../assets/js/helpers";

export default function Banner() {
  const text = useSelector((state) => state.text[0]);
  const clientData = useSelector((state) => state.client);

  if (isEmpty(text) || !clientData) {
    return "";
  }

  const { ip } = clientData;

  const banner_1 = text["banner_1"]["tekst"] ?? "Hier hoort een kop";
  const banner_2 = text["banner_2"]["tekst"] ?? "Hier hoort een kop";
  const banner_3 = text["banner_3"]["tekst"] ?? "Hier hoort een kop";

  return (
    <section id="home">
      <div className="row">
        <div className="col-5 banner-image">
          <p>&nbsp;</p>
        </div>
        <div className="col-7 banner-text">
          <div className="wrapper">
            <div
              className="display-2"
              onClick={() => editTag(text["banner_1"], ip)}
            >
              {banner_1}
            </div>
            <div
              className="display-4 text-dark d-none d-md-block"
              onClick={() => editTag(text["banner_2"], ip)}
            >
              {banner_2}
            </div>
            <div
              className="display-6 text-muted d-none d-lg-block"
              onClick={() => editTag(text["banner_3"], ip)}
            >
              {banner_3}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
