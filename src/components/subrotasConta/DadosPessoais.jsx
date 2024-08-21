import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import './DadosPessoais.scss';

const DadosPessoais = () => {
  const [userData, setUserData] = useState({ email: "", name: "" });
  const [userId, setUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setUserData({
      email: user.email,
      name: user.name,
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
    fetch("https://petshop-bca2a-default-rtdb.firebaseio.com/users.json")
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
        } else {
          console.error("Nenhum usuário encontrado com o email fornecido.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o userId pelo email:", error);
      });
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
        setUserData({ email, name, password });
        setIsEditing(false);
        localStorage.setItem("user", JSON.stringify({ email, name, password }));
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
        setUserData({ email: "", name: "", password: "" });
        setEmail("");
        setPassword("");
        setName("");
      })
      .catch((error) => {
        console.error("Erro ao deletar dados do usuário:", error);
      });
  };

  return (
    <div className="dados-pessoais">
      <h2>Dados Pessoais</h2>
      <div className="section">
        <p>
          <strong>Nome:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            userData.name
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
            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button className="btn btn-danger" onClick={handleDeleteClick}>
              Deletar Conta
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DadosPessoais;
