import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../media/weather-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navbar-logoImg" src={logo} alt="logo" />
      </Link>
      <button className="navbar-btn" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="navbar-btn" onClick={() => navigate("/aboutUs")}>
        About Us
      </button>
      <button className="navbar-btn" onClick={() => navigate("/contactUs")}>
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
