import React from "react";
import "./marcas.scss";
// import Whiskas from "../../assets/img/whiskas.webp";
// import Pedigree from "../../assets/img/pedrigree.png";
import Friskies from "../../assets/img/friskies-2.svg";
import Purina from "../../assets/img/purina.svg";

const Marcas = () => {
  return (
    <div className="marcas">
      <h2>Marcas que você encontra aqui</h2>
      <div className="image-wrapper">
        {/* <img src={Whiskas} alt="Whiskas" /> */}
        <img src={Friskies} alt="Friskies" />
        <img src={Purina} alt="Purina" />
      </div>
    </div>
  );
};

export default Marcas;
