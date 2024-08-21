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
import Loja from "./pages/loja/Loja";
import AnimalList from "./pages/loja/animais/AnimalList";
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
              <AnimalList />
            </Layout>
          }
        >
          <Route index element={<Loja category="gato" />} />
          <Route
            path="racoes"
            element={<Loja category="gato" subcategory="racoes" />}
          />
          <Route
            path="medicamentos"
            element={<Loja category="gato" subcategory="medicamentos" />}
          />
          <Route
            path="roupas"
            element={<Loja category="gato" subcategory="roupas" />}
          />
        </Route>
        <Route
          path="/cachorros"
          element={
            <Layout>
              <AnimalList />
            </Layout>
          }
        >
          <Route index element={<Loja category="cachorro" />} />
          <Route
            path="racoes"
            element={<Loja category="cachorro" subcategory="racoes" />}
          />
          <Route
            path="medicamentos"
            element={<Loja category="cachorro" subcategory="medicamentos" />}
          />
          <Route
            path="coleiras"
            element={<Loja category="cachorro" subcategory="coleiras" />}
          />
        </Route>
        <Route
          path="/roedores"
          element={
            <Layout>
              <AnimalList />
            </Layout>
          }
        >
          <Route index element={<Loja category="roedor" />} />
          <Route
            path="racoes"
            element={<Loja category="roedor" subcategory="racoes" />}
          />
          <Route
            path="medicamentos"
            element={<Loja category="roedor" subcategory="medicamentos" />}
          />
          <Route
            path="brinquedos"
            element={<Loja category="roedor" subcategory="brinquedos" />}
          />
        </Route>
        <Route
          path="/peixes"
          element={
            <Layout>
              <AnimalList />
            </Layout>
          }
        >
          <Route index element={<Loja category="peixes" />} />
          <Route
            path="racoes"
            element={<Loja category="peixes" subcategory="racoes" />}
          />
          <Route
            path="limpeza"
            element={<Loja category="peixes" subcategory="limpeza" />}
          />
          <Route
            path="enfeites"
            element={<Loja category="peixes" subcategory="enfeites" />}
          />
        </Route>
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
