import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-altlight fixed-top">
        <div className="container-xxl">
          <a href="/" className="navbar-brand">
            <span className="text-secondary">
              <i className="bi bi-bug"></i>
              Marsha Metselaar
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#nieuw">
                      Nieuw!
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#autonoom">
                      Beelden
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#toegepast">
                      Toegepast werk
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#archief">
                      Archief
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#cursus" className="nav-link">
                  Vragen
                </a>
              </li>
              <li className="nav-item">
                <a href="#ervaringen" className="nav-link">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="filler"></section>
    </>
  );
}
