import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditOrderModal = ({ show, handleClose, handleSave, addressData }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    cidade: "",
    estado: "",
    rua: "",
    cep: "",
    orderId: "",
  });

  useEffect(() => {
    if (addressData) {
      setFormData({
        cidade: addressData.cidade || "",
        estado: addressData.estado || "",
        rua: addressData.rua || "",
        cep: addressData.cep || "",
        orderId: addressData.id || "",
        userEmail: user.email,
      });
    }
  }, [addressData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Endereço</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="editOrderForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="cidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              value={formData.estado}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rua">
            <Form.Label>Rua</Form.Label>
            <Form.Control
              type="text"
              value={formData.rua}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              value={formData.cep}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Control type="hidden" id="orderId" value={formData.orderId} />
          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditOrderModal;
