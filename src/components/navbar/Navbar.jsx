import React from "react";
import "./navbar.scss";
import DogShield from "../../../public/shield-dog-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
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
            <div className="login-icon-container">
              <a
                href="/login"
                className="login-icon"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Login"
              >
                <FontAwesomeIcon icon={faSignInAlt} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Categorias section */}
      <div className="categorias-container py-2">
        <div className="container-xl">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/gatos">
                Gatos
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <a className="dropdown-item" to="/home">
                    Ração
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="/home">
                    Medicamentos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="/home">
                    Roupas
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/cachorros">
                Cachorros
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <a className="dropdown-item" href="/cachorros">
                    Cachorros
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/gatos">
                    Gatos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/roedores">
                    Roedores
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="dropdownPets"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Roedores
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <a className="dropdown-item" href="/cachorros">
                    Ração
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/gatos">
                    Medicamentos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/roedores">
                    Brinquedos
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="dropdownPets"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Peixes
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <a className="dropdown-item" href="/cachorros">
                    Ração e Vitaminas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/gatos">
                    Manutenção e Limpeza
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/roedores">
                    Plantas e Enfeites
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
