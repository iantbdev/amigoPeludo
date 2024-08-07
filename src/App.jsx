import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loja from "./pages/loja/Loja";
import Contato from "./pages/contato/Contato";
import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
