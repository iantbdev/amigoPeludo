import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contato from "./pages/contato/Contato";
import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq";
import Login from "./pages/login/Login";
import Registro from "./pages/registro/Registro";
import "./App.css";
import Layout from "./components/Layout";
import GatoList from "./pages/loja/animais/GatoList";
import CachorroList from "./pages/loja/animais/CachorroList";
import RoedoresList from "./pages/loja/animais/RoedoresList";
import PeixesList from "./pages/loja/animais/PeixesList";
import Carrinho from "./pages/carrinho/Carrinho";
import Pagamento from "./pages/pagamento/Pagamento";
import Conta from "./pages/conta/Conta";
import Pedidos from "./components/subrotasConta/PedidosConta";
import Enderecos from "./components/subrotasConta/EnderecosConta";
import DadosPessoais from "./components/subrotasConta/DadosPessoais";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/gatos"
          element={
            <Layout>
              <GatoList />
            </Layout>
          }
        >
          <Route path="racoes" element={<div>Racoes</div>} />
        </Route>
        <Route
          path="/cachorros"
          element={
            <Layout>
              <CachorroList />
            </Layout>
          }
        />
        <Route
          path="/roedores"
          element={
            <Layout>
              <RoedoresList />
            </Layout>
          }
        />
        <Route
          path="/peixes"
          element={
            <Layout>
              <PeixesList />
            </Layout>
          }
        />
        <Route
          path="/contato"
          element={
            <Layout>
              <Contato />
            </Layout>
          }
        />
        <Route
          path="/carrinho"
          element={
            <Layout>
              <Carrinho />
            </Layout>
          }
        />
        <Route
          path="/pagamento"
          element={
            <Layout>
              <Pagamento />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/registro"
          element={
            <Layout>
              <Registro />
            </Layout>
          }
        />
        <Route
          path="/conta"
          element={
            <Layout>
              <Conta />
            </Layout>
          }
        >
          <Route path="dados-pessoais" element={<DadosPessoais />} />
          <Route path="enderecos" element={<Enderecos />} />
          <Route path="pedidos" element={<Pedidos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
