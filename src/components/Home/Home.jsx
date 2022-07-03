import "./home.scss";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homeContent">
        <h1>Prevention from Corona Virus</h1>
        <h3>stay home, stay safe</h3>
        <Link
          to="prevent"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
        >
          <button className="prevent-btn">How To Prevent</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
