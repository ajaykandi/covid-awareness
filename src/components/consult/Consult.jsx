import "./consult.scss";

const Consult = () => {
  return (
    <div className="consult" id="consult">
      <h1>CONSULT TO OUR DOCTORS</h1>
      <div className="consult-container">
        {/* map hear */}
        <div className="consult-card">
          <div className="card-top">
            <img src="assets/Images/doc1.png" alt="" />
            <h3>John Deo</h3>
            <p>Senior Expert</p>
          </div>
          <div className="card-bottom">
            <span className="fab fa-whatsapp"></span>
            <span className="fab fa-facebook-f"></span>
            <span className="fab fa-twitter"></span>
            <span className="fab fa-instagram"></span>
            <span className="fab fa-linkedin"></span>
          </div>
        </div>
        <div className="consult-card">
          <div className="card-top">
            <img src="assets/Images/doc2.png" alt="" />
            <h3>John Deo</h3>
            <p>Senior Expert</p>
          </div>
          <div className="card-bottom">
            <span className="fab fa-whatsapp"></span>
            <span className="fab fa-facebook-f"></span>
            <span className="fab fa-twitter"></span>
            <span className="fab fa-instagram"></span>
            <span className="fab fa-linkedin"></span>
          </div>
        </div>
        <div className="consult-card">
          <div className="card-top">
            <img src="assets/Images/doc3.png" alt="" />
            <h3>John Deo</h3>
            <p>Senior Expert</p>
          </div>
          <div className="card-bottom">
            <span className="fab fa-whatsapp"></span>
            <span className="fab fa-facebook-f"></span>
            <span className="fab fa-twitter"></span>
            <span className="fab fa-instagram"></span>
            <span className="fab fa-linkedin"></span>
          </div>
        </div>

        {/* map */}
      </div>
    </div>
  );
};

export default Consult;
