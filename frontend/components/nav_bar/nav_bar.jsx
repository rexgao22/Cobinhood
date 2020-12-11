import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from './search_bar'
class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
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
                <header>{this.props.user.username}</header>
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
                <div className="logout-button" onClick={this.props.logout}>
                  <img className="logout-img" src={window.images.logout} />
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
 
export default NavBar;