import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ProdutoAcoes = ({ product, onEdit, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(product);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja deletar este produto?")) {
      onDelete(product.id);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await onEdit(productToEdit);
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
  };

  return (
    <div className="product-actions">
      <Button
        variant="warning"
        onClick={handleEdit}
        style={{ marginRight: "20px" }}
      >
        Editar
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Deletar
      </Button>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group controlId="formMarca">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="marca"
                value={productToEdit.marca}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={productToEdit.titulo}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formFoto">
              <Form.Label>Foto URL</Form.Label>
              <Form.Control
                type="text"
                name="foto"
                value={productToEdit.foto}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPreco">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                name="preco"
                value={productToEdit.preco}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                value={productToEdit.categoria}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Atualizar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProdutoAcoes;
