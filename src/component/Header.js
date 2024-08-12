import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg" style={{"background-color" : "#4bbfb0"}}>
  <div className="container">
    <NavLink className="navbar-brand" to="#"><img style={{width:"80px"}} src="./images/logo.png" alt="logo"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="#">SignIn</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">SignUp</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Service</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}