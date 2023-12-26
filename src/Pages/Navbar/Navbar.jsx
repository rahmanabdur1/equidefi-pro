import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollUpCount, setScrollUpCount] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolled = (scrollY / (documentHeight - windowHeight)) * 100;

    if (scrollY > scrollProgress) {
      setScrolling(false);
    } else {
      setScrolling(true);
      setScrollUpCount(scrollUpCount + 1);
    }

    setScrollProgress(scrollY);
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollUpCount]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <img width={"150px"} src={logo} alt="" />
      <div className={`micca-links ${showMenu ? "active" : ""}`}>
        <Link to="/">LEARN</Link>
        <Link to="/invest">INVEST</Link>
        <Link to="/raisecapital">RAISE CAPITAL</Link>
        <Link to="/marketplace">MARKETPLACE</Link>
        <Link className="scheduleLink" to="/schedules">Schedule A Demo</Link>
      </div>

      <div className="mobile-toggle" onClick={toggleMenu}>
        <div className="micca">
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </div>
      </div>
      <div className="bg-progress">
        <div
          className="progressBar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
