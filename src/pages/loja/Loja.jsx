import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./loja.scss";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("titulo");

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://petshop-bca2a-default-rtdb.firebaseio.com/produtos.json"
      );
      const data = await response.json();
      const productsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setProducts(productsArray);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const sortProducts = (criteria) => {
    const sorted = [...products].sort((a, b) => {
      if (criteria === "titulo") {
        return a.titulo.localeCompare(b.titulo);
      } else if (criteria === "preco") {
        return a.preco - b.preco;
      }
      return 0;
    });
    setSortedProducts(sorted);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    sortProducts(sortCriteria);
  }, [products, sortCriteria]);

  return (
    <div>
      <div className="container">
        <div className="categoria-introducao">
          <h2 style={{ textTransform: "capitalize" }}>{category}</h2>
          <Form.Select
            aria-label="Order By"
            onChange={(e) => setSortCriteria(e.target.value)}
            style={{ width: "200px" }}
            className="form-select"
          >
            <option value="titulo">Ordenar por título</option>
            <option value="preco">Ordenar por preço</option>
          </Form.Select>
        </div>

        <div className="produto-container">
          {sortedProducts
            .filter((product) => product.categoria === category.toLowerCase())
            .map((product) => (
              <div className="produto" key={product.id}>
                <img src={product.foto} alt="" />
                <div className="descricao">
                  <span>{product.marca}</span>
                  <h5>{product.titulo}</h5>
                  <h4>R$ {product.preco}</h4>
                </div>
                <button className="btn btn-success" href="/pagamento">
                  Comprar
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
