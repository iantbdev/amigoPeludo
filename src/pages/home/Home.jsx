import React, { useRef, useState } from "react";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../../assets/banner.webp";
import Banner2 from "../../assets/banner-2.webp";
import Banner3 from "../../assets/banner3.webp";
import BannerContact from "../../assets/BannerContact.png";
import ComidaGato from "../../assets/img/comida_gato.svg";
import BrinquedoCao from "../../assets/img/GoodDogBone__71419 1.svg";
import BrinquedoGato from "../../assets/img/gato_brinquedo.svg";
import ComidaCao from "../../assets/img/smalldog-710065 1.svg";
import Servicos from "../../components/servicos/servicos";
import Marcas from "../../components/marcas/Marcas";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <main className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          // className="introducao"
        >
          <SwiperSlide>
            <img src={Banner} alt="Banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2} alt="Banner2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner3} alt="Banner3" />
          </SwiperSlide>
        </Swiper>

        <section className="container-categorias">
          <h2>
            <span>Categorias </span>Em Destaque
          </h2>
          <div class="top-categorias">
            <div class="categorias">
              <img src={ComidaGato} alt="Comida de gato" />
              <h6>Comida para Gatos</h6>
            </div>
            <div class="categorias">
              <img src={BrinquedoCao} alt="" />
              <h6>Brinquedo para Cães</h6>
            </div>
            <div class="categorias">
              <img src={BrinquedoGato} alt="Brinquedo de gato" />
              <h6>Brinquedo para Gatos</h6>
            </div>
            <div class="categorias">
              <img src={ComidaCao} alt="" />
              <h6>Comida para Cães</h6>
            </div>
          </div>
        </section>

        <div className="whastsapp">
          <img src={BannerContact} alt="" />
        </div>

        <Servicos />
        <Marcas />
      </main>
    </div>
  );
};

export default Home;
