import React, { Component } from 'react';
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
            Portfolio
          </div>
        );
    }
}
 
export default Portfolio;