import React, { useState, useEffect } from "react";
import "./navbar.scss";
import DogShield from "../../../public/shield-dog-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faCircleUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const cartItems = useSelector((state) => state.cart.cart);

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
          <Link
            to="/home"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img
              src={DogShield}
              alt="Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
          </Link>
          <Link className="navbar-brand" to="/home">
            Amigo Peludo
          </Link>
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
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato">
                  Contato
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <Link
                to="/carrinho"
                className="d-flex align-items-center text-decoration-none"
              >
                <FontAwesomeIcon
                  className="me-2"
                  style={{ color: "#f75656" }}
                  icon={faShoppingCart}
                  size="lg"
                />
                {cartItems.length > 0 && (
                  <span
                    className="badge rounded-pill"
                    style={{ backgroundColor: "#5656F7", transition: "0.3s" }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <div className="login-icon-container ms-3">
                {loggedInUser ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownConta"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon
                        className="login-icon"
                        icon={faCircleUser}
                      />
                      {loggedInUser && (
                        <span className="user-name"> {loggedInUser.name}</span>
                      )}
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownConta"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/conta/dados-pessoais"
                        >
                          Dados da Conta
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleLogout}
                        >
                          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <Link
                    to="/login"
                    className="login-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Login | Cadastro"
                  >
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </Link>
                )}
              </div>
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
                  <Link className="dropdown-item" to="/gatos/racoes">
                    Rações e Petiscos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gatos/medicamentos">
                    Medicamentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gatos/roupas">
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
                  <Link className="dropdown-item" to="/cachorros/racoes">
                    Rações e Petiscos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cachorros/medicamentos">
                    Medicamentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cachorros/coleiras">
                    Coleiras
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/roedores">
                Roedores
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <Link className="dropdown-item" to="/roedores/racoes">
                    Rações
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/roedores/medicamentos">
                    Medicamentos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/roedores/brinquedos">
                    Brinquedos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/peixes">
                Peixes
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownPets">
                <li>
                  <Link className="dropdown-item" to="/peixes/racoes">
                    Alimentação
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/peixes/limpeza">
                    Manutenção e Limpeza
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/peixes/enfeites">
                    Decoração e Enfeites
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
