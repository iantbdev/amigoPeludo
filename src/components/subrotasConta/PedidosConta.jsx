import React, { useState, useEffect } from "react";
import "./pedidos.scss";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  useEffect(() => {
    const fetchPedidos = async () => {
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

        if (data) {
          const filteredPedidos = Object.keys(data)
            .map((key) => ({
              id: key,
              ...data[key],
            }))
            .filter((pedido) => pedido.userEmail === user.email);

          setPedidos(filteredPedidos);
        } else {
          setPedidos([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  if (loading) {
    return <p className="loading">Carregando...</p>;
  }

  if (error) {
    return <p className="error">Erro: {error}</p>;
  }

  const indexUltimoPedido = currentPage;
  const indexPrimeiroPedido = currentPage - itemsPerPage;
  const currentPedidos = pedidos.slice(indexPrimeiroPedido, indexUltimoPedido);

  const handleNextPage = () => {
    if (currentPage < pedidos.length) {
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
      <h3>Seus Pedidos</h3>
      {pedidos.length > 0 ? (
        <>
          <ul>
            {currentPedidos.map((pedido) => (
              <li className="pedido-item" key={pedido.id}>
                <h4>Informações do Pedido:</h4>
                <p>Cidade: {pedido.cidade}</p>
                <p>Estado: {pedido.estado}</p>
                <p>Rua: {pedido.rua}</p>
                <p>CEP: {pedido.cep}</p>
                <h4>Itens:</h4>
                <ul>
                  {Object.keys(pedido.items).map((key) => {
                    const item = pedido.items[key];
                    return (
                      <li className="pedido-detalhes-produto" key={key}>
                        <img
                          className="product-image"
                          src={item.foto}
                          alt={item.titulo}
                        />
                        <p>Título: {item.titulo}</p>
                        <p>Marca: {item.marca}</p>
                        <p>Preço: R${item.preco}</p>
                        <p>Quantidade: {item.quantidade}</p>
                      </li>
                    );
                  })}
                </ul>
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
              Página {currentPage} de {pedidos.length}
            </span>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage === pedidos.length}
            >
              Próximo
            </button>
          </div>
        </>
      ) : (
        <p className="no-pedidos">Você não tem pedidos.</p>
      )}
    </div>
  );
};

export default Pedidos;
