import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loja from "./pages/loja/Loja";
import Contato from "./pages/contato/Contato";
import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq";
import Login from "./pages/login/Login";
import Registro from "./pages/registro/Registro";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GatoList from "./pages/loja/animais/GatoList";
import CachorroList from "./pages/loja/animais/CachorroList";
import RoedoresList from "./pages/loja/animais/RoedoresList";
import PeixesList from "./pages/loja/animais/PeixesList";
import Carrinho from "./pages/carrinho/Carrinho";
import Pagamento from "./pages/pagamento/Pagamento";
import Conta from "./pages/conta/Conta";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/loja" element={<Loja />} /> */}
            <Route path="/gatos" element={<GatoList />} />
            <Route path="/cachorros" element={<CachorroList />} />
            <Route path="/roedores" element={<RoedoresList />} />
            <Route path="/peixes" element={<PeixesList />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/conta" element={<Conta />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
