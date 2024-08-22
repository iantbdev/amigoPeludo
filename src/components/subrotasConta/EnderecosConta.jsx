import React, { useState, useEffect } from "react";
import "./pedidos.scss";

const Enderecos = () => {
  const [enderecos, setEnderecos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  useEffect(() => {
    const fetchEnderecos = async () => {
      setLoading(true);
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        const response = await fetch(
          "https://petshop-bca2a-default-rtdb.firebaseio.com/pedidos.json"
        );
        const data = await response.json();

        if (data && typeof data === "object") {
          const filteredEnderecos = Object.keys(data)
            .map((key) => ({
              id: key,
              ...data[key],
            }))
            .filter(
              (pedido) =>
                pedido.userEmail === user.email && pedido.saveAddress === true
            );

          setEnderecos(filteredEnderecos);
        } else {
          setEnderecos([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnderecos();
  }, []);

  if (loading) {
    return <p className="loading">Carregando...</p>;
  }

  if (error) {
    return <p className="error">Erro: {error}</p>;
  }

  const indexUltimoEndereco = currentPage;
  const indexPrimeiroEndereco = indexUltimoEndereco - itemsPerPage;
  const currentEnderecos = enderecos.slice(
    indexPrimeiroEndereco,
    indexUltimoEndereco
  );

  const handleNextPage = () => {
    if (currentPage < enderecos.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pedidos-container">
      <h2>Endereços</h2>
      {enderecos.length > 0 ? (
        <>
          <ul>
            {currentEnderecos.map((endereco, index) => (
              <li className="pedido-item" key={index}>
                <h4>Informações do Endereço:</h4>
                <p>Rua: {endereco.rua}</p>
                <p>Cidade: {endereco.cidade}</p>
                <p>Estado: {endereco.estado}</p>
                <p>CEP: {endereco.cep}</p>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <button
              className="pagination-button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span>
              Página {currentPage} de {enderecos.length}
            </span>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage === enderecos.length}
            >
              Próximo
            </button>
          </div>
        </>
      ) : (
        <p className="no-pedidos">Nenhum endereço salvo.</p>
      )}
    </div>
  );
};

export default Enderecos;
