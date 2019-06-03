import React from 'react';
import {Link} from 'react-router-dom';
import {BRAND_NAME} from "../../constants/app";

const TopBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand" >{BRAND_NAME}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      <Link to="/security/login" className="nav-link" >Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/security/registration" className="nav-link" >Registration</Link>
                  </li>
              </ul>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
          </div>
      </nav>
  );
};

export default TopBar;
