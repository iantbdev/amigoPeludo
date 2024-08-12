import React, { useState, useEffect } from "react";
import "./navbar.scss";
import DogShield from "../../../public/shield-dog-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedInUser(null);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

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
                  id="navbarDropdownConta"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {loggedInUser ? loggedInUser.name : "Conta"}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownConta"
                >
                  {loggedInUser ? (
                    <>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleLogout}
                        >
                          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          <FontAwesomeIcon icon={faSignInAlt} /> Login
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/registro">
                          Inscreva-se
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
            <div className="login-icon-container">
              {loggedInUser ? (
                <a
                  href="/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Sua Conta"
                >
                  <FontAwesomeIcon className="login-icon" icon={faCircleUser} />
                </a>
              ) : (
                <a
                  href="/login"
                  className="login-icon"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Login | Cadastro"
                >
                  <FontAwesomeIcon icon={faSignInAlt} />
                </a>
              )}
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
                  <Link className="dropdown-item" to="/home">
                    Ração
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/home">
                    Medicamentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/home">
                    Roupas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/cachorros">
                Cachorros
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <Link className="dropdown-item" to="/cachorros">
                    Cachorros
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gatos">
                    Gatos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/roedores">
                    Roedores
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="#"
                id="dropdownPets"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Roedores
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <Link className="dropdown-item" to="/cachorros">
                    Ração
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gatos">
                    Medicamentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/roedores">
                    Brinquedos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="#"
                id="dropdownPets"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Peixes
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <Link className="dropdown-item" to="/cachorros">
                    Ração e Vitaminas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gatos">
                    Manutenção e Limpeza
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/roedores">
                    Plantas e Enfeites
                  </Link>
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
