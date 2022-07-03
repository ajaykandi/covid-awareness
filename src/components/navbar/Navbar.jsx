import { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navbar ? "navbar navbar-bg" : "navbar"}>
      <a href="#home">
        <div className="logo">
          c<span className="fas fa-virus "></span>vid-19
        </div>
      </a>
      <div
        id="menu"
        className="fas fa-bars"
        onClick={() => setToggle(!toggle)}
      ></div>
      <ul
        className={`navLinks  ${toggle ? "menu-open" : ""} ${
          navbar && "ul-bg"
        }`}
      >
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          onClick={() => setToggle(!toggle)}
        >
          Home
        </Link>
        <Link
          to="prevent"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          onClick={() => setToggle(!toggle)}
        >
          Prevent
        </Link>
        <Link
          to="symptoms"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          onClick={() => setToggle(!toggle)}
        >
          Symptoms
        </Link>
        <Link
          to="precautions"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-95}
          onClick={() => setToggle(!toggle)}
        >
          Precautions
        </Link>
        <Link
          to="consult"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setToggle(!toggle)}
        >
          Doctor
        </Link>
        <Link
          to="handwash"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-65}
          onClick={() => setToggle(!toggle)}
        >
          Handwash
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
