import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

class PortfolioGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: props.endValue,
      netChange: props.portValueChange,
      perChange: props.percentChange,
    };
  }

  handleMouseMove(lineData) {
    if (!lineData.isTooltipActive) return;
    this.setState({
      val: lineData.activePayload[0].value,
      netChange:
        lineData.activePayload[0].value -
        this.props.graphPoints[0].portfolioValue,
      perChange:
        (lineData.activePayload[0].value /
          this.props.graphPoints[0].portfolioValue -
          1) *
        100,
    });
  }

  render() {
    if (this.props.graphPoints.length === 0)
      return (
        <div className="portfolio-graph-container">
          <header>
            {`$${(this.props.buyingPower).toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </header>
          <p>Welcome to RobinGood!</p>
        </div>
      );
    const color = this.props.portValueChange > 0 ? "#82ca9d" : "#f45531";
    const sign = this.state.netChange < 0 ? "-" : "+";
    return (
      <div className="portfolio-graph">
        <header>
          {`$${this.state.val.toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </header>
        <div className="account-change">
          <span className="bold-me">
            {`${sign}$${Math.abs(this.state.netChange).toLocaleString(
              "en",
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}`}
          </span>
          <span className="bold-me">
            {`(${sign}${Math.abs(this.state.perChange).toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}%)`}
          </span>
          <span>Today</span>
        </div>
        <LineChart
          width={710}
          height={295}
          data={this.props.graphPoints}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          onMouseMove={(lineData) => this.handleMouseMove(lineData)}
          onMouseLeave={() =>
            this.setState({
              val: this.props.endValue,
              netChange: this.props.portValueChange,
              perChange: this.props.percentChange,
            })
          }
        >
          <Tooltip offset={0} position={{ y: 150 }} isAnimationActive={false} />
          <Line
            type="monotone"
            dataKey="portfolioValue"
            stroke={color}
            dot={false}
            strokeWidth={2}
          />
          <XAxis dataKey="label" hide={true} />
          <YAxis domain={["dataMin", "dataMax"]} hide={true} />
        </LineChart>
      </div>
    );
  }
}

export default PortfolioGraph;
