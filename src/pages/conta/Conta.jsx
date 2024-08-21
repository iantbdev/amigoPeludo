import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./conta.scss";

const Conta = () => {
  const [loggedInUserName, setLoggedInUserName] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedInUserName(user.name);
    }
  }, []);
  return (
    <div className="container container-conta">
      <div className="row">
        <div className="main-column">
          <div className="actions">
            <Outlet />
          </div>
        </div>

        {/* Coluna de navegação */}
        <div className="sidebar-column">
          <h3>Olá, {loggedInUserName}</h3>
          <ul>
            <li>
              <Link to="dados-pessoais">Dados Pessoais</Link>
            </li>
            <li>
              <Link to="enderecos">Endereços</Link>
            </li>
            <li>
              <Link to="pedidos">Pedidos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Conta;
