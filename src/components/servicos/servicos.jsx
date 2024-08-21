import "./servicos.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import { ServicosDados } from "./servicosConstante";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Servicos = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center servicos-container">
      <h2>
        <span>Nossos</span> Serviços
      </h2>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-90 mx-auto w-lg-80 servicos"
      >
        {ServicosDados.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="position-relative rounded d-flex flex-column servico-card">
              <div
                className="position-absolute w-100 h-100 "
                style={{ opacity: "0.1" }}
              />
              <div className="position-relative d-flex flex-column gap-1">
                <div className="icon-wrapper">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="text-primary"
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  />
                </div>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Servicos;
