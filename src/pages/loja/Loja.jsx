import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ModalProduto from "../../components/AdminAcoes/ModalAddProduto";
import Form from "react-bootstrap/Form";
import ProductActions from "../../components/AdminAcoes/ProdutoAcoes";
import "./loja.scss";

const Loja = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("titulo");

  const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user : {};
  };

  const user = getCurrentUser();

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

  const handleEdit = async (updatedProduct) => {
    try {
      const response = await fetch(
        `https://petshop-bca2a-default-rtdb.firebaseio.com/produtos/${updatedProduct.id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (!response.ok) {
        throw new Error("Erro ao atualizar produto.");
      }
      setProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto.");
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `https://petshop-bca2a-default-rtdb.firebaseio.com/produtos/${productId}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Erro ao deletar produto.");
      }
      setProducts(products.filter((product) => product.id !== productId));
      alert("Produto deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar produto.");
    }
  };

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
        {user.email === "admin@gmail.com" && (
          <ModalProduto category={category} OnSubmit={fetchProducts} />
        )}

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
                {user.email === "admin@gmail.com" ? (
                  <ProductActions
                    product={product}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ) : (
                  <Button className="btn btn-success" href="/pagamento">
                    Comprar
                  </Button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Loja;
