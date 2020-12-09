import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
          <section>
            <div className="logout-button" onClick={this.props.logout}>
              <span>Log Out</span>
            </div>
          </section>
        );
    }
}
 
export default NavBar;