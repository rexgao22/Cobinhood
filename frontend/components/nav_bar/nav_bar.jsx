import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
          <section>
            <Link to='/portfolio'>Cobinhood</Link>
            
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
          </section>
        );
    }
}
 
export default NavBar;