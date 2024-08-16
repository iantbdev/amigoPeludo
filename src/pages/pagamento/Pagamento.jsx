import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import EditOrderModal from "../../components/EditOrderAddress/EditOrderModal";
import "./pagamento.scss";
import { useSelector } from "react-redux";
const Pagamento = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetailsVisible, setCardDetailsVisible] = useState(true);
  const [userOrders, setUserOrders] = useState([]);
  const [formData, setFormData] = useState({
    cidade: "",
    estado: "",
    rua: "",
    cep: "",
    saveAddress: false,
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);

  const cartItems = useSelector((state) => state.cart.cart);

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
    try {
      await fetch(
        "https://petshop-bca2a-default-rtdb.firebaseio.com/pedidos.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            userEmail: currentUser.email,
            items: cartItems,
          }),
        }
      );
      alert("Compra realizada!");
      setFormData({
        cidade: "",
        estado: "",
        rua: "",
        cep: "",
        saveAddress: false,
      });
    } catch (error) {
      console.error("Houve um erro", error);
    }
    window.location.href = "/home";
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

  const selectAddress = (order) => {
    setFormData({
      cidade: order.cidade,
      estado: order.estado,
      rua: order.rua,
      cep: order.cep,
      saveAddress: false,
    });
  };

  const handleEditOrder = (order) => {
    setCurrentAddress(order);
    setShowEditModal(true);
  };

  const handleSave = (updatedOrder) => {
    updateOrder(updatedOrder.orderId, updatedOrder);
    setShowEditModal(false);
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
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
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
                      checked={paymentMethod === "pix"}
                      onChange={() => setPaymentMethod("pix")}
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
                      checked={paymentMethod === "boleto"}
                      onChange={() => setPaymentMethod("boleto")}
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
                            value={formData.cidade}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                cidade: e.target.value,
                              })
                            }
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
                            value={formData.estado}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                estado: e.target.value,
                              })
                            }
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
                        value={formData.rua}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            rua: e.target.value,
                          })
                        }
                        required
                      />
                      <span>Rua</span>
                    </div>
                    <div className="inputbox mt-3">
                      <input
                        type="text"
                        name="cep"
                        className="form-control"
                        value={formData.cep}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cep: e.target.value,
                          })
                        }
                        required
                      />
                      <span>CEP</span>
                    </div>
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="saveAddress"
                        checked={formData.saveAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            saveAddress: e.target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        Salvar endereço
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Realizar Pagamento
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <h6 className="text-uppercase">Endereços salvos</h6>
                {userOrders.length > 0 ? (
                  <ul className="list-group">
                    {userOrders
                      .filter((order) => order.saveAddress)
                      .map((order) => (
                        <li
                          className="list-group-item order-item"
                          onClick={() => selectAddress(order)}
                          key={order.id}
                        >
                          <p>
                            {order.rua}, {order.cidade} - {order.estado} -{" "}
                            {order.cep}
                          </p>
                          <Button
                            className="btn btn-success"
                            onClick={() => handleEditOrder(order)}
                          >
                            <i className="fa fa-edit" aria-hidden="true"></i>
                          </Button>
                          <Button
                            className="btn btn-success"
                            onClick={() => handleDeleteOrder(order.id)}
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
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
      <EditOrderModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        handleSave={handleSave}
        addressData={currentAddress}
      />
    </div>
  );
};

export default Pagamento;
