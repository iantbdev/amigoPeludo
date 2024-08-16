import React from "react";
import Slider from "react-slick";
import "./marcas.scss";
import Friskies from "../../assets/img/friskies-2.svg";
import Purina from "../../assets/img/purina.svg";

const Marcas = () => {
  // Configuração do slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="marcas">
      <h2>Marcas que você encontra aqui</h2>
      <div className="image-wrapper">
        <Slider {...settings}>
          <div>
            <img
              src="https://static-file.petz.com.br/platforms/img/product/ecommerce/brands/NDPrime.jpg"
              alt="NDPrime"
            />
          </div>
          <div>
            <img src={Purina} alt="Purina" />
          </div>
          <div>
            <img
              src="https://seeklogo.com/images/M/mega-zoo-logo-0E5D3BFA75-seeklogo.com.png"
              alt="MegaZoo"
            />
          </div>
          <div>
            <img
              src="https://static-file.petz.com.br/platforms/img/product/ecommerce/brands/PremierPet.jpg"
              alt="Premier"
            />
          </div>
          <div>
            <img
              src="https://static-file.petz.com.br/platforms/img/product/ecommerce/brands/NutriFresh.png"
              alt="NutriFresh"
            />
          </div>
          <div>
            <img
              src="https://static-file.petz.com.br/platforms/img/product/ecommerce/brands/Whiskas.jpg"
              alt="Whiskas"
            />
          </div>
          <div>
            <img
              src="https://static-file.petz.com.br/platforms/img/product/ecommerce/brands/Spike.png"
              alt="Spike"
            />
          </div>
          <div>
            <img
              src="https://static-file.petz.com.br/platforms/img/product/ecommerce/brands/ZeeDog.png"
              alt="ZeeDog"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Marcas;
