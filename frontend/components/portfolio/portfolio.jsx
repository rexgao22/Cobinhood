import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';


class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.updatePortfolio(
          Object.keys(this.props.ownedAssets).concat(Object.keys(this.props.watchedAssets)),
          this.props.ownedAssets,
          this.props.buyingPower
        );
    }
    
    render() {     
        return (
          <div>
            Portfolio
          <Sidebar />
          </div>
        );
    }
}
 
export default Portfolio;