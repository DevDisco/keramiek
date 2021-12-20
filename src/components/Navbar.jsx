import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-altlight fixed-top">
        <div className="container-xxl">
          <Link to="/" className="navbar-brand">
            <span className="text-secondary">
              <i className="bi bi-bug"></i>
              &nbsp;Marsha Metselaar
            </span>
          </Link>

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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="a"
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
                    <Link to="c/nieuw" className="dropdown-item">
                      Nieuw!
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="c/autonoom" className="dropdown-item">
                      Autonoom werk
                    </Link>
                  </li>
                  <li>
                    <Link to="c/toegepast" className="dropdown-item">
                      Toegepast werk
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="c/archief" className="dropdown-item">
                      Archief
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#cursus" className="nav-link disabled">
                  Cursussen
                </a>
              </li>
              <li className="nav-item">
                <a href="#cursus" className="nav-link disabled">
                  Vragen
                </a>
              </li>
              <li className="nav-item">
                <a href="#ervaringen" className="nav-link disabled">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link disabled">
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
