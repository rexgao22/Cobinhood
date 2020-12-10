import React, { Component } from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.buyingPower
    }
    render() { 
        
        return (
          <div>
            <NavBarContainer />
            Portfolio
          </div>
        );
    }
}
 
export default Portfolio;