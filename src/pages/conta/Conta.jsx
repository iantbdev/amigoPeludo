import React, { useEffect, useState } from "react";
import "./conta.scss";

const Conta = () => {
  const [userData, setUserData] = useState({ email: "", nome: "" });
  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setUserData({
      email: user.email || "",
      nome: user.name || "",
    });

    const savedEnderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
    setEnderecos(savedEnderecos);
  }, []);
  return (
    <div className="container container-conta">
      <div className="row">
        {/* Coluna principal com dados e endereços */}
        <div className="main-column">
          <h2>Conta</h2>
          <div className="section">
            <h3>Dados Pessoais</h3>
            <p>Email: {userData.email}</p>
            <p>Nome: {userData.nome}</p>
          </div>
          <div className="section">
            <h3>Endereços</h3>
            {enderecos.length > 0 ? (
              <ul>
                {enderecos.map((endereco, index) => (
                  <li key={index}>{endereco}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhum endereço salvo.</p>
            )}
          </div>
          <div className="section">
            <h3>Pedidos</h3>
            <p>Seus pedidos aparecerão aqui em breve.</p>
          </div>
        </div>

        {/* Coluna de navegação */}
        <div className="sidebar-column">
          <h3>Olá, {userData.nome}</h3>
          <ul>
            <li>
              <a href="#dados-pessoais">Dados Pessoais</a>
            </li>
            <li>
              <a href="#enderecos">Endereços</a>
            </li>
            <li>
              <a href="#pedidos">Pedidos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Conta;
