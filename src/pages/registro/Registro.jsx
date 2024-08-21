import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registro.scss";

const Registro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não são iguais");
      return;
    }

    try {
      await newUser(formData);
      localStorage.setItem("user", JSON.stringify(formData));
      setError("");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.error("Houve um erro:", error);
      setError("Ocorreu um erro ao registrar o usuário");
    }
  };

  const newUser = async (userData) => {
    const response = await fetch(
      "https://petshop-bca2a-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error("Resposta de rede não foi ok");
    }
  };

  return (
    <section className="card-register" style={{ backgroundColor: "#eee" }}>
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

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Seu Nome"
                            value={formData.name}
                            onChange={handleInputChange}
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
                            value={formData.email}
                            onChange={handleInputChange}
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
                            minLength={3}
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Repita sua senha"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {error && <p className="text-danger">{error}</p>}

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
