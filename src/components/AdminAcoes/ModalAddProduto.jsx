import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ModalProduto = ({ category, OnSubmit }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    marca: "",
    titulo: "",
    foto: "",
    preco: "",
    categoria: category.toLowerCase(),
  });
  const handleAddProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://petshop-bca2a-default-rtdb.firebaseio.com/produtos.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );
      if (!response.ok) {
        throw new Error("Erro ao adicionar produto");
      }
      setNewProduct({
        marca: "",
        titulo: "",
        foto: "",
        preco: "",
        categoria: category.toLowerCase(),
      });
      setShowAddModal(false);
      OnSubmit();
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };
  return (
    <>
      <Button style={{ width: "200px" }} onClick={() => setShowAddModal(true)}>
        Adicionar Produto
      </Button>
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddProductSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="marca"
                value={newProduct.marca}
                onChange={handleAddProductChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={newProduct.titulo}
                onChange={handleAddProductChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagem (link)</Form.Label>
              <Form.Control
                type="text"
                name="foto"
                value={newProduct.foto}
                onChange={handleAddProductChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                name="preco"
                value={newProduct.preco}
                onChange={handleAddProductChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                name="categoria"
                value={newProduct.categoria}
                onChange={handleAddProductChange}
                required
              >
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
                <option value="roedor">Roedores</option>
                <option value="peixes">Peixes</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProduto;
