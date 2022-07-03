import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>about us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            minima soluta distinctio eaque magni veritatis dicta dolore
            dignissimos totam quis!
          </p>
        </div>

        <div className="box">
          <h3>locations</h3>
          <a href="#">india</a>
          <a href="#">USA</a>
          <a href="#">france</a>
          <a href="#">russia</a>
          <a href="#">japan</a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#">home</a>
          <a href="#">prevent</a>
          <a href="#">symptoms</a>
          <a href="#">precautions</a>
          <a href="#">doctor</a>
          <a href="#">hand-wash</a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
          <a href="#">instagram</a>
          <a href="#">linkedin</a>
          <a href="#">youtube</a>
        </div>
      </div>

      <h1 className="credit">
        created by mr. AjayKandi &copy; copyright @ 2021
      </h1>
    </div>
  );
};

export default Footer;
