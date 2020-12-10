import React from 'react';
import { Link } from "react-router-dom";

const HomeNavBar = (props) => (
  <section className="navbar">
    <div className="navbar-logo">
      <h1 className="navbar-name">Cobinhood</h1>
      <img className="logo" src={window.images.logo} />
    </div>
    <div>
      <Link className="nav-link" to="/login">
        {" "}
        Log In
      </Link>
      <Link className="nav-link" to="/signup">
        <span>Sign Up</span>
      </Link>
    </div>
  </section>
);

export default HomeNavBar;