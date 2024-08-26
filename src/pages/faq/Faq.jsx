import React from "react";
import "./faq.scss";
import GatoConfuso from "../../assets/img/gatoConfuso.png";

const Faq = () => {
  return (
    <div>
      <section className="faq-section py-3 py-md-5">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-4">
              <img
                src={GatoConfuso}
                alt="Ficou com dúvidas?"
                className="img-fluid rounded"
                loading="lazy"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Ficou com dúvidas?</h2>
                  <p className="lead fs-4 text-secondary mb-5">
                    Esperamos que você consiga achar uma resposta para sua
                    dúvida. Se você precisar de ajuda, entre em contato via
                    e-mail ou preencha o formulário dessa página.
                  </p>
                  <div className="accordion accordion-flush">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Como faço para comprar um produto?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Para comprar um produto, acesse nossa loja e escolha o
                          item desejado. Em seguida, clique em "Comprar" e siga
                          as instruções para finalizar a compra.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Qual o prazo de entrega dos produtos?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          O prazo de entrega dos produtos varia de acordo com a
                          localidade de entrega. Em geral, o prazo é de 5 a 7
                          dias úteis.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Posso trocar ou devolver um produto?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Sim, é possível trocar ou devolver um produto dentro
                          do prazo de 7 dias após a entrega. Entre em contato
                          conosco para mais informações.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Posso cancelar uma compra?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Para cancelar uma compra certifique-se que sua
                            compra foi realizada em um período de 24h. Depois,
                            siga essas instruções:
                          </p>
                          <ul>
                            <li>Vá no nosso website e entre na sua conta.</li>
                            <li>
                              Clique na sua conta e veja os detalhes dos seus
                              pedidos.
                            </li>
                            <li>
                              Clique em um pedido e aparte o botão "Cancelar
                              Compra"
                            </li>
                            <li>Confirme sua senha e dados.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-form-section">
        <div className="faq-form-container">
          <h2>
            <span>Não encontrou as respostas que estava procurando?</span>{" "}
            <br />
            Envie a sua dúvida para nossa equipe!
          </h2>
          <div className="faq-form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="faq-form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite o seu e-mail"
              required
            />
          </div>

          <div className="faq-form-group">
            <textarea
              id="pergunta"
              name="pergunta"
              placeholder="Informe a sua dúvida"
              required
            ></textarea>
          </div>

          <button type="submit" className="faq-submit-button">
            Enviar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Faq;
