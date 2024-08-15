import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { removeFromCart } from "../../store/reducers/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "./carrinho.scss";

const Carrinho = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user !== null;
  };

  const handleRemoveFromCart = (produto) => {
    dispatch(removeFromCart({ id: produto.id }));
    console.log(produto);
  };

  const handleCheckout = () => {
    if (isAuthenticated()) {
      navigate("/pagamento");
    } else {
      navigate("/login");
    }
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.preco * (item.quantidade || 1),
    0
  );
  const shippingCost = 20.0;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="container carrinho py-5 h-100">
      {totalItems === 0 ? (
        <div className="container-vazio">
          <img
            src="https://mytoyjungle.com/img/empty-cart.svg"
            alt="Empty Cart"
          />
          <h3>Seu carrinho está vazio</h3>
          <h5>Adicione alguns produtos!</h5>
          <Link to="/home" className="carrinho-buttonHome">
            <Button className="carrinho-button">Voltar para a loja</Button>
          </Link>
        </div>
      ) : (
        <section className="h-100 h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h2 className="fw-bold mb-0">Meu Carrinho</h2>
                          <h6 className="mb-0 text-muted">
                            {totalItems} itens
                          </h6>
                        </div>
                        <hr className="my-4" />

                        {cartItems.map((produto) => (
                          <div
                            className="row mb-4 d-flex justify-content-between align-items-center"
                            key={produto.id}
                          >
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={produto.foto}
                                className="img-fluid rounded-3"
                                alt={produto.titulo}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{produto.marca}</h6>
                              <h6 className="mb-0">{produto.titulo}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <Button
                                className="btn btn-link px-2"
                                onClick={() => {
                                  // função a ser criada
                                  //
                                }}
                              >
                                <i className="fas fa-minus"></i>
                              </Button>

                              <input
                                min="0"
                                name="quantity"
                                value={produto.quantidade || 1}
                                type="number"
                                className="form-control form-control-sm"
                              />

                              <Button
                                className="btn btn-link px-2"
                                onClick={() => {
                                  // funçao a ser criada
                                  //
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </Button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">R$ {produto.preco}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <icon
                                className="text-muted"
                                onClick={() => handleRemoveFromCart(produto)}
                              >
                                <i className="fas fa-times"></i>
                              </icon>
                            </div>
                          </div>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/home" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Voltar para a loja
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-body-tertiary">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">
                          Resumo do Pedido
                        </h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5>{totalItems} Itens</h5>
                          <h5>R$ {totalPrice}</h5>
                        </div>

                        <h5 className="mb-3">Entrega</h5>

                        <div className="mb-4 pb-2">
                          <select className="form-select">
                            <option value="20">
                              Entrega Padrão - R$ 20.00
                            </option>
                            <option value="800">
                              Entrega Expressa - R$ 800.00
                            </option>
                            <option value="0">Receber na Loja - Grátis</option>
                          </select>
                        </div>

                        <h5 className="mb-3">Cupom</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label text-muted">
                              <small>
                                Cupons são válidos para itens vendidos pelo
                                Amigo Peludo
                              </small>
                            </label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5>Total</h5>
                          <h5>R$ {grandTotal}</h5>
                        </div>

                        <Button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                          onClick={handleCheckout}
                        >
                          Comprar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Carrinho;
