import "./contato.scss";

const Contato = () => {
  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="display-4">
          <span style={{ color: "#f63d3d" }}>Fale Conosco</span>
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border p-4 rounded bg-light mb-4">
            <p className="mb-2">
              <i className="me-2"></i>
              <strong>Fixo:</strong> 4002-8922
            </p>
            <p className="mb-2">
              <i className="me-2"></i>
              <strong>WhatsApp:</strong> 2345-678
            </p>
            <p className="mb-0">
              <i className="me-2"></i>
              <strong>E-Mail:</strong> amigo@peludo.com
            </p>
          </div>
          <div className="text-center mb-4">
            <h3 className="display-5">
              <span style={{ color: "#f63d3d" }}>Nossa</span> Localização Física
            </h3>
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019618455619!2d-122.42067968468195!3d37.77928017975774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581b1d243a48f%3A0xc0c0e0c0c0c0c0c0!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1621328750718!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
