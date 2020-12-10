import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
      const {logout} = this.props
        return (
          <section>
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
          </section>
        );
    }
}
 
export default NavBar;