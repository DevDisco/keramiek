import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section id="home">
      <div className="row">
        <div className="col-5 banner-image">
          <p>&nbsp;</p>
        </div>
        <div className="col-7 banner-text">
          <div className="wrapper">
            <div className="display-2">Marsha Metselaar</div>
            <div className="display-4 text-dark d-none d-md-block">
              Beeldend kunstenaar
            </div>
            <div className="display-6 text-muted d-none d-lg-block">
              Keramiek, kippen & cursussen.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
