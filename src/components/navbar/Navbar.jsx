import React, { useState, useContext, useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="logo">
        {/* <img src="img/paw-solid.svg" alt=""> */}
        <span>AMIGO PELUDO </span>
      </div>
      <nav class="menu navbar navbar-expand-md navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="index.html" class="nav-link">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a href="loja.html" class="nav-link">
                LOJA
              </a>
            </li>
            <li class="nav-item">
              <a href="faq.html" class="nav-link">
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a href="agendamento.html" class="nav-link">
                AGENDAMENTO
              </a>
            </li>
            <li class="nav-item">
              <a href="contato.html" class="nav-link">
                CONTATO
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CONTA
              </a>

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="conta.html">
                    Dados Pessoais
                  </a>
                </li>

                <li>
                  <a class=" dropdown-item" href="#">
                    Carrinho
                  </a>
                </li>
                <li>{/* <hr class="dropdown-divider"> */}</li>
                <li>
                  <a class="dropdown-item" onclick="logout()">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item" id="login">
              <a href="login.html" class="nav-link">
                LOGIN
              </a>
            </li>
            <li class="nav-item" id="cadastro">
              <a href="registro.html" class="botao btn btn-outline-primary">
                INSCREVA-SE
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
