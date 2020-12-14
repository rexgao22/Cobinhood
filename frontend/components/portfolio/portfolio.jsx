import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';
import PortfolioGraph from "./portfolio_graph";

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
          <PortfolioGraph />
          <Sidebar />
          </div>
        );
    }
}
 
export default Portfolio;