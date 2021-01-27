import React, { Component } from "react";
import Sidebar from "./sidebar/sidebar";
import PortfolioGraph from "./portfolio_graph";
import NewsContainer from "./news/news_container";
class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchHoldings().then(() => {
      this.props.updatePortfolio(
        Object.keys(this.props.ownedAssets).concat(
          Object.keys(this.props.watchedAssets)
        ),
        this.props.ownedAssets,
        this.props.buyingPower
      );
    });
    this.displayGraph = this.displayGraph.bind(this);
  }

  displayGraph() {
    const graphPoints = this.props.portfolioGraph;

    if (graphPoints.length === 0) return (
      <div className="no-graph-container">
        <header>
          {`$${this.props.buyingPower.toFixed(2).toLocaleString("en-US")}`}
        </header>
        <p>
          Welcome to RobinGood! Purchase stocks to see the graph.
          Have fun with the free money
        </p>
      </div>
    );
    const portValueChange =
      graphPoints[graphPoints.length - 1].portfolioValue -
      graphPoints[0].portfolioValue;
    const percentChange =
      (portValueChange / graphPoints[0].portfolioValue) * 100;
    const endValue = graphPoints[graphPoints.length - 1].portfolioValue;
    return (
      <PortfolioGraph
        graphPoints={graphPoints}
        portValueChange={portValueChange}
        buyingPower={this.props.buyingPower}
        percentChange={percentChange}
        endValue={endValue}
      />
    );
  }
  render() {
    // const graphPoints = this.props.portfolioGraph;

    // if (graphPoints.length === 0) return null;
    // const portValueChange =
    //   graphPoints[graphPoints.length - 1].portfolioValue -
    //   graphPoints[0].portfolioValue;
    // const percentChange =
    //   (portValueChange / graphPoints[0].portfolioValue) * 100;
    // const endValue = graphPoints[graphPoints.length - 1].portfolioValue;
    return (
      <div className="portfolio">
        <div className="main-section">
          {this.displayGraph()}
          <NewsContainer />
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Portfolio;
