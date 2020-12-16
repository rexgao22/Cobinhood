import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";

const NavBar = ({ currentUser, holdingValue,logout, path }) => {
  const HomeNavBar = () => (
    <section className="navbar">
      <div className="navbar-logo">
        <h1 className="navbar-name">Cobinhood</h1>
        <img className="logo" src={window.images.logo} />
      </div>
      <div className="navbar-about-me">
        <span className="dropdown-header">About Me</span>
        <div className="about-me-dropdown">
          <a href="https://github.com/rexgao22">
            <i className="fab fa-github-square fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/rex-gao-61a9a5139/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://lolchess.gg/profile/na/ikebukuro">
            <i className="fas fa-gamepad fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="home-link">
        <Link id="login" className="home-link-child" to="/login">
          {" "}
          Log In
        </Link>
        <Link id="signup" className="home-link-child" to="/signup">
          <span>Sign Up</span>
        </Link>
      </div>
    </section>
  );
  const PortfolioNavBar = () => (
    <section className="navbar">
      <div className="navbar-logo">
        <Link className="navbar-name" to="/portfolio">
        <img className="logo" src={window.images.logo} />
        </Link>
      </div>
      <SearchBar />
      <div className="user-dropdown">
        <span className="user-dropdown-header">Account</span>
        <div className="user-dropdown-content">
          <header>{currentUser.username}</header>
          <div className="balances">
            <div className="total-value">
              <div className="value">
                ${(holdingValue + currentUser.buyingPower).toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </div>
              <span>Portfolio Value</span>
            </div>
            <div className="user-buying-power">
              <div className="value">
                {currentUser.buyingPower.toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </div>
              <span>Buying Power</span>
            </div>
          </div>
          <div className="logout-button" onClick={logout}>
            <img className="logout-img" src={window.images.logout} />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </section>
  );
  if (
    path.history.location.pathname === "/login" ||
    path.history.location.pathname === "/signup"
  ) {
    return null;
  } else {
    return currentUser ? PortfolioNavBar() : HomeNavBar();
  }
};

export default NavBar;
