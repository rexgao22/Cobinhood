import React from 'react';
import { Link } from "react-router-dom";

const HomeNavBar = (props) => (
  <section>
    <h1>Cobinhood</h1>
    <div>
        <Link id="login-link" to="/login"> Log In</Link>
        <Link id="signup-link" to="/signup"><span>Sign Up</span></Link>
    </div>
  </section>
);

export default HomeNavBar;