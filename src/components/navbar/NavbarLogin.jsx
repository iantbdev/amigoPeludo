import React from "react";
import "./navbarlogin.scss";
import DogShield from "../../../public/shield-dog-solid.svg";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
  return (
    <nav className="navbar-login">
      <img src={DogShield} alt="Logo" className="logo" />
      <Link className="navbar-brand" to="/home">
        Amigo Peludo
      </Link>
    </nav>
  );
};

export default NavbarLogin;
