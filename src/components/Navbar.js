import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../media/weather-logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navbar-logoImg" src={logo} alt="logo" />
      </Link>
      <div className="navbar-buttons-wrpr">
        <button className="navbar-buttons-wrpr-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="navbar-buttons-wrpr-btn" onClick={() => navigate("/aboutUs")}>
          About Us
        </button>
        <button className="navbar-buttons-wrpr-btn" onClick={() => navigate("/contactUs")}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
