import React from "react";
import { useSelector } from "react-redux";
import "./Banner.css";

export default function Banner() {
  const text = useSelector((state) => state.text);
  if (!text) {
    return "";
  }

  return (
    <section id="home">
      <div className="row">
        <div className="col-5 banner-image">
          <p>&nbsp;</p>
        </div>
        <div className="col-7 banner-text">
          <div className="wrapper">
            <div className="display-2">{text.banner_1}</div>
            <div className="display-4 text-dark d-none d-md-block">
              {text.banner_2}
            </div>
            <div className="display-6 text-muted d-none d-lg-block">
              {text.banner_3}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
