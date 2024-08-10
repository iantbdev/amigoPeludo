import "./login.scss";

const Login = () => {
  const handleBackButtonClick = () => {
    window.location.href = "/home";
  };

  return (
    <section className="card-login" style={{ backgroundColor: "#eee" }}>
      <div className="back-button" onClick={handleBackButtonClick}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                      Bem vindo de volta!
                    </p>
                    <p className="text-center h2 mb-5 mx-1 mx-md-4 mt-4">
                      Log-in
                    </p>

                    <form className="mx-1 mx-md-4" id="loginUserForm">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Seu Email"
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
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-3">
                        <a href="#!" style={{ color: "#f63d3d" }}>
                          Esqueceu a senha?
                        </a>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-3">
                        <p
                          className="mb-0 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Não tem uma conta?{" "}
                          <a href="/registro" style={{ color: "#f63d3d" }}>
                            Inscreva-se aqui
                          </a>
                        </p>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          id="login_button"
                          style={{ backgroundColor: "#f63d3d", border: "none" }}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://padariapet.com.br/wp-content/uploads/sites/39/2020/07/SITE_Encomenda-1.png"
                      className="img-fluid w-75 mx-auto"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
