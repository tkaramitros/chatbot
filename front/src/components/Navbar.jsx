import React from "react";
import logo from "../logo.png";
import "./Navbar.css";


const Navbar = () => {
  return (
  <nav className="navbar2 navbar navbar-expand-lg  ">
    <div className="container-fluid">
    <a class="navbar-brand "  >
    <img src={logo} alt="Real Estate" />
    </a>
      <button className="navbar-toggler "   type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon  ">
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 items center">
          <li className="nav-item ">
            <a className="nav-link "  href="/">Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="rent">Rent</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="sell">Sell</a>
          </li>

          </ul>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 items">
            <li className="nav-item dropdown"> 
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi- bi-person-circle" data-width="11" data-height="11"></i> Account
      
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="signup">SignUp</a></li>
              <li><a className="dropdown-item" href="login">Login </a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#">Help</a></li>
            </ul>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};


   export default Navbar;
