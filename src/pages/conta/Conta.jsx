import React, { useEffect, useState } from "react";
import "./conta.scss";

const Conta = () => {
  const [userData, setUserData] = useState({ email: "", name: "" });
  const [userId, setUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Adicionando estado para visibilidade da senha

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setUserData({
      email: user.email,
      nome: user.name,
      password: user.password,
    });
    setEmail(user.email);
    setName(user.name);
    setPassword(user.password);

    if (user.email) {
      fetchUserIdByEmail(user.email);
    }
  }, []);

  const fetchUserIdByEmail = (email) => {
    fetch(`https://petshop-bca2a-default-rtdb.firebaseio.com/users.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        const userKeys = Object.keys(data);
        const userID = userKeys.find((key) => data[key].email === email);

        if (userID) {
          setUserId(userID);
          console.log("User ID:", userID);
        } else {
          console.error("Nenhum usuário encontrado com o email fornecido.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o userId pelo email:", error);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    if (!userId) {
      alert("Não foi possível atualizar. O ID do usuário não está disponível.");
      return;
    }

    const updatedData = {
      email,
      password,
      name,
    };

    fetch(
      `https://petshop-bca2a-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Resposta não foi ok");
        }
        return response.json();
      })
      .then(() => {
        alert("Informações atualizadas com sucesso!");

        setUserData({ email, name: name, password: password });
        setIsEditing(false);

        localStorage.setItem("user", JSON.stringify({ email, name, password }));

        window.location.href = "/conta";
      })
      .catch((error) => {
        console.error("Erro ao atualizar dados do usuário:", error);
      });
  };

  const handleDeleteClick = () => {
    if (!userId) {
      alert("Não foi possível deletar. O ID do usuário não está disponível.");
      return;
    }

    fetch(
      `https://petshop-bca2a-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        alert("Usuário deletado com sucesso!");
        localStorage.removeItem("user");
        setUserData({ email: "", nome: "", password: "" });
        setEmail("");
        setPassword("");
        setName("");

        setTimeout(() => {
          window.location.href = "/home";
        }, 1000);
      })
      .catch((error) => {
        console.error("Erro ao deletar dados do usuário:", error);
      });
  };

  return (
    <div className="container container-conta">
      <div className="row">
        {/* Coluna principal com dados e endereços */}
        <div className="main-column">
          <h2>Conta</h2>
          <div className="section">
            <h3>Dados Pessoais</h3>
            <p>
              <strong>Nome:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                userData.nome
              )}
            </p>
            <p>
              <strong>Email: </strong>
              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                userData.email
              )}
            </p>
            <p>
              <strong>Senha: </strong>
              {isEditing ? (
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordVisible(true)}
                  onBlur={() => setIsPasswordVisible(false)}
                />
              ) : (
                "******"
              )}
            </p>
          </div>
          <div className="section">
            <h3>Endereços</h3>
            <p>Nenhum endereço salvo.</p>
          </div>
          <div className="section">
            <h3>Pedidos</h3>
            <p>Seus pedidos aparecerão aqui em breve.</p>
          </div>
          <div className="actions">
            {isEditing ? (
              <>
                <button className="btn btn-primary" onClick={handleUpdateClick}>
                  Atualizar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-primary" onClick={handleEditClick}>
                  Editar
                </button>
                <button className="btn btn-danger" onClick={handleDeleteClick}>
                  Deletar Conta
                </button>
              </>
            )}
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
