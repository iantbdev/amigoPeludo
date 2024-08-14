import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { removeFromCart } from "../../store/reducers/cartSlice";

const Carrinho = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (produto) => {
    dispatch(removeFromCart({ id: produto.id }));
    console.log(produto);
  };

  return (
    <div className="container">
      <h2>Meu Carrinho</h2>
      <div className="produto-container">
        {cartItems.map((produto) => {
          return (
            <div className="produto" key={produto.id}>
              <img src={produto.foto} alt="" />
              <div className="descricao">
                <span>{produto.marca}</span>
                <h5>{produto.titulo}</h5>
                <h4>R$ {produto.preco}</h4>
                <Button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleRemoveFromCart(produto)}
                >
                  Remover
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrinho;
