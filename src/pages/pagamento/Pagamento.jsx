import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./pagamento.scss";

const Pagamento = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetailsVisible, setCardDetailsVisible] = useState(true);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);

    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    setSelectedProduct(product);

    if (user) {
      fetchUserOrders(user.email);
    }

    document
      .querySelectorAll('input[name="paymentMethod"]')
      .forEach((input) => {
        input.addEventListener("change", () => {
          setPaymentMethod(input.value);
        });
      });
  }, []);

  useEffect(() => {
    setCardDetailsVisible(paymentMethod === "card");
  }, [paymentMethod]);

  const fetchUserOrders = async (email) => {
    try {
      const response = await fetch(
        "https://petshop-bca2a-default-rtdb.firebaseio.com/pedidos.json"
      );
      const data = await response.json();
      if (data) {
        const ordersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUserOrders(ordersArray.filter((order) => order.userEmail === email));
      }
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
    }
  };

  const createOrder = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const orderData = {
      userEmail: currentUser.email,
      cidade: formData.get("cidade"),
      estado: formData.get("estado"),
      rua: formData.get("rua"),
      cep: formData.get("cep"),
      saveAddress: formData.get("saveAddress") ? true : false,
    };
    try {
      await fetch(
        "https://petshop-bca2a-default-rtdb.firebaseio.com/pedidos.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );
      alert("Compra realizada!");
      event.target.reset();
    } catch (error) {
      console.error("Houve um erro", error);
    }
  };

  const updateOrder = async (orderId, updatedOrder) => {
    try {
      await fetch(
        `https://petshop-bca2a-default-rtdb.firebaseio.com/pedidos/${orderId}.json`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedOrder),
        }
      );
      fetchUserOrders(currentUser.email);
    } catch (error) {
      console.error("Erro ao atualizar o endereço:", error);
    }
  };

  const deleteAddress = async (orderId) => {
    try {
      await fetch(
        `https://petshop-bca2a-default-rtdb.firebaseio.com/pedidos/${orderId}.json`,
        {
          method: "DELETE",
        }
      );
      fetchUserOrders(currentUser.email);
    } catch (error) {
      console.error("Houve um problema ao deletar o endereço:", error);
    }
  };

  const handleEditOrder = (order) => {
    // Implementa a lógica para exibir e editar o modal
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Tem certeza que deseja deletar esse endereço?")) {
      deleteAddress(orderId);
    }
  };

  return (
    <div className="container-pagamento">
      <main>
        <div className="container mt-5 px-5">
          <div className="mb-4">
            <h2>Confirme o pedido e pague</h2>
            <span>
              Por favor, insira e confirme seus dados para depois fazer o
              pagamento
            </span>
          </div>

          <div className="row">
            <div className="col-md-8">
              <form id="createOrderForm" onSubmit={createOrder}>
                <div className="card p-3">
                  <h6 className="text-uppercase">Opções de pagamento</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="paymentCard"
                      value="card"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="paymentCard">
                      Cartão de Crédito/Débito
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="paymentPix"
                      value="pix"
                    />
                    <label className="form-check-label" htmlFor="paymentPix">
                      PIX
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="paymentBoleto"
                      value="boleto"
                    />
                    <label className="form-check-label" htmlFor="paymentBoleto">
                      Boleto
                    </label>
                  </div>

                  {cardDetailsVisible && (
                    <div id="cardDetails" className="mt-4">
                      <h6 className="text-uppercase">Detalhes do pagamento</h6>
                      <div className="inputbox mt-3">
                        <input
                          type="text"
                          name="nameCard"
                          className="form-control"
                          required
                        />
                        <span>Nome no cartão</span>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="inputbox mt-3 mr-2">
                            <input
                              type="number"
                              name="numberCard"
                              className="form-control"
                              required
                            />
                            <span>Número do cartão</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex flex-row">
                            <div className="inputbox mt-3 mr-2">
                              <input
                                type="date"
                                name="dateCard"
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="inputbox mt-3 mr-2">
                              <input
                                type="number"
                                name="cvv"
                                className="form-control"
                                required
                              />
                              <span>CVV</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <h6 className="text-uppercase">Dados de entrega</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="inputbox mt-3">
                          <input
                            type="text"
                            name="cidade"
                            className="form-control"
                            required
                          />
                          <span>Cidade</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="inputbox mt-3">
                          <input
                            type="text"
                            name="estado"
                            className="form-control"
                            required
                          />
                          <span>Estado</span>
                        </div>
                      </div>
                    </div>
                    <div className="inputbox mt-3">
                      <input
                        type="text"
                        name="rua"
                        className="form-control"
                        required
                      />
                      <span>Rua</span>
                    </div>
                    <div className="inputbox mt-3">
                      <input
                        type="text"
                        name="cep"
                        className="form-control"
                        required
                      />
                      <span>CEP</span>
                    </div>
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="saveAddress"
                      />
                      <label className="form-check-label">
                        Salvar endereço
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Confirmar e pagar
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <h6 className="text-uppercase">Endereços salvos</h6>
                {userOrders.length > 0 ? (
                  <ul className="list-group">
                    {userOrders.map((order) => (
                      <li className="list-group-item" key={order.id}>
                        {order.rua}, {order.cidade} - {order.estado} -{" "}
                        {order.cep}
                        <Button
                          className="btn btn-link"
                          onClick={() => handleEditOrder(order)}
                        >
                          Editar
                        </Button>
                        <Button
                          className="btn btn-link "
                          onClick={() => handleDeleteOrder(order.id)}
                        >
                          Excluir
                        </Button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Você não tem endereços salvos.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pagamento;
