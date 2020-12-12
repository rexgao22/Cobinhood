import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";

const NavBar = ({currentUser,logout,path}) => {
  const HomeNavBar = () => (
    <section className="navbar">
      <div className="navbar-logo">
        <h1 className="navbar-name">Cobinhood</h1>
        <img className="logo" src={window.images.logo} />
      </div>
      <div className="home-link">
        <div>
          <span>About Me</span>
        </div>
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
          Cobinhood
        </Link>
        <img className="logo" src={window.images.logo} />
      </div>
      <SearchBar />
      <div className="user-dropdown">
        <span className="user-dropdown-header">Account</span>
        <div className="user-dropdown-content">
          <header>{currentUser.username}</header>
          <div className="balances">
            <div className="total-value">
              <div className="value">$999</div>
              <span>Portfolio Value</span>
            </div>
            <div className="user-buying-power">
              <div className="value">$10000</div>
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
  if (path.history.location.pathname === "/login" || path.history.location.pathname === "/signup"){
    return null;
  }else{

  return currentUser ? PortfolioNavBar() : HomeNavBar();
  }
};

export default NavBar;
