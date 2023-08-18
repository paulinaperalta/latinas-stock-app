import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/LatinasCodeCampLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="#" className="Img" />
      <Link to="/">Inicio</Link>
      <Link to="/Revisar">Mis acciones</Link>
      <Link to="/Comprar">Comprar/Vender</Link>
      <Link to="/Depositar">Depositar fondos</Link>
    </div>
  );
};

export default Navbar;
