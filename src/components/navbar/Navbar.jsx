import React from "react";
import "./navbar.scss";
import DogShield from "../../../public/shield-dog-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      aria-label="Ninth navbar example"
    >
      <div className="container-xl">
        <a
          href="/home"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img
            src={DogShield}
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
        </a>
        <a className="navbar-brand" href="/home">
          Amigo Peludo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/loja">
                Loja
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faq">
                Faq
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contato">
                Contato
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown07XL"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Conta
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form>
            <button className="botao btn btn-outline-primary">Login</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
