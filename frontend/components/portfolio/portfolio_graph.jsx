import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

class PortfolioGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.endValue,
      valueChange: props.portValueChange,
      perChange: props.percentChange,
    };
  }

  handleMouseMove(lineData) {
    if (!lineData.isTooltipActive) return;
    this.setState({
      value: lineData.activePayload[0].value,
      valueChange:
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
            {`$${this.props.buyingPower.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </header>
          <p>Welcome to RobinGood!</p>
        </div>
      );
    const color = this.props.portValueChange > 0 ? "#82ca9d" : "#f45531";
    const sign = this.state.valueChange < 0 ? "-" : "+";
    return (
      <div className="portfolio-graph">
        <header>
          {`$${this.state.value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </header>
        <div className="account-change">
          <span>
            {`${sign}$${Math.abs(this.state.valueChange).toLocaleString(
              "en-US",
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}`}
          </span>
          <span >
            {`(${sign}${Math.abs(this.state.perChange).toLocaleString("en-US", {
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
              valueChange: this.props.portValueChange,
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
