import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registro.scss";

const Registro = () => {
  const handleBackButtonClick = () => {
    window.location.href = "/home";
  };

  return (
    <section className="card-register" style={{ backgroundColor: "#eee" }}>
      <div className="back-button" onClick={handleBackButtonClick}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"
              style={{ borderRadius: "25px", height: "50rem" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Registre-se
                    </p>

                    <form className="mx-1 mx-md-4" id="createUserForm">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Seu Nome"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Seu Email"
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Senha"
                            minLength={5}
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Repita sua senha"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                          style={{ color: "#393f81" }}
                        >
                          Eu concordo com os{" "}
                          <a
                            style={{ color: "#f63d3d" }}
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                          >
                            Termos de serviço
                          </a>
                        </label>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-2">
                        <p
                          className="mb-0 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Já tem uma conta?{" "}
                          <Link style={{ color: "#f63d3d" }} to="/login">
                            Logue aqui
                          </Link>
                        </p>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{ backgroundColor: "#f63d3d", border: "none" }}
                          id="submit_button"
                        >
                          Registrar-se
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://padariapet.com.br/wp-content/uploads/sites/39/2020/07/SITE_Nossos-Produtos-01.png"
                      className="img-fluid w-75 mx-auto"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="myModalLabel">
                Termos de Serviço
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <h3>O que estes termos cobrem</h3>
              <p>
                Kirkwall, também conhecida como a Cidade das Correntes, e
                historicamente como Emerius, é uma cidade-estado costeira e um
                importante centro populacional localizado nas Fronteiras Livres,
                ao norte de Ferelden. Situa-se na extremidade sul das Montanhas
                Vimmark, a leste da Floresta Planasene e ao norte do outro lado
                do Mar Animado de Ferelden, no continente de Thedas.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registro;
