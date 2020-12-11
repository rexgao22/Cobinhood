import React from 'react';
import { Link } from "react-router-dom";

const HomeNavBar = (props) => (
  <section className="navbar">
    <div className="navbar-logo">
      <h1 className="navbar-name">Cobinhood</h1>
      <img className="logo" src={window.images.logo} />
    </div>
    <div className="home-link">
      <div>
        <span>About Me</span>
      </div>
      <Link id='login' className="home-link-child" to="/login">
        {" "}
        Log In
      </Link>
      <Link id='signup' className="home-link-child" to="/signup">
        <span>Sign Up</span>
      </Link>
    </div>
  </section>
);

export default HomeNavBar;