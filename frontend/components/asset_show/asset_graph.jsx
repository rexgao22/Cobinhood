import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { fetchDailyGraphData } from "../../util/asset_util";

class AssetGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      graphColor: null,
      price: 0,
      priceChange: 0,
      percentChange: 0,
    };
  }

  componentDidMount() {
    fetchDailyGraphData(this.props.tickerSymbol).then((data) => {
      const dataPoint = [];
      for (let i = 0; i < data.length; i += 5) {
        while (!data[i].average) {
          i++;
        }
        dataPoint.push(data[i]);
      }
      let i = data.length - 1;
      while (!data[i].average) {
        i--;
      }
      if (data[i].minute !== dataPoint[dataPoint.length - 1].minute) {
        dataPoint.push(data[i]);
      }
      const color =
        dataPoint[dataPoint.length - 1].average > dataPoint[0].average
          ? "#82ca9d"
          : "#f45531";
      this.setState({ data: dataPoint, graphColor: color });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.tickerSymbol !== prevProps.tickerSymbol) {
      fetchDailyGraphData(this.props.tickerSymbol).then((data) => {
        const dataPoint = [];
        for (let i = 0; i < data.length; i += 5) {
          while (!data[i].average) {
            i++;
          }
          dataPoint.push(data[i]);
        }
        let i = data.length - 1;
        while (!data[i].average) {
          i--;
        }
        if (data[i].minute !== dataPoint[dataPoint.length - 1].minute) {
          dataPoint.push(data[i]);
        }
        const color =
          dataPoint[dataPoint.length - 1].average > dataPoint[0].average
            ? "#82ca9d"
            : "#f45531";
        this.setState({ data: dataPoint, graphColor: color });
      });
    }
    if (this.props.price !== prevProps.price) {
   
      this.setState({
        price: this.props.price,
        priceChange: this.props.portValueChange,
        percentChange: this.props.percentChange,
      });
    }
  }

  handleMouseMove(lineData) {
    if (!lineData.isTooltipActive) return;
    if (lineData.activePayload === undefined) return;
    this.setState({
      price: lineData.activePayload[0].value,
      priceChange: lineData.activePayload[0].value - this.state.data[0].average,
      percentChange:
        (lineData.activePayload[0].value / this.state.data[0].average - 1) *
        100,
    });
  }

  render() {
    const sign = this.state.priceChange > 0 ? "+" : "-";
    return (
      <div className="asset-graph">
        <div className="company-name">{this.props.companyName}</div>
        <header>
          {`$${this.state.price.toFixed(2).toLocaleString("en-US")}`}
        </header>
        <div className="asset-change">
          <span>
            {`${sign}$${Math.abs(this.state.priceChange)
              .toFixed(2)
              .toLocaleString("en-US")}`}
          </span>
          <span>
            {`(${sign}${Math.abs(this.state.percentChange)
              .toFixed(2)
              .toLocaleString("en-US")}%)`}
          </span>
          <span>Today</span>
        </div>
        <LineChart
          width={710}
          height={295}
          data={this.state.data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          onMouseMove={(lineData) => this.handleMouseMove(lineData)}
          onMouseLeave={() =>
            this.setState({
              price: this.props.price,
              priceChange: this.props.portValueChange,
              percentChange: this.props.percentChange,
            })
          }
        >
          <Tooltip offset={0} position={{ y: 150 }} isAnimationActive={false} />
          <Line
            type="monotone"
            dataKey="average"
            stroke={this.state.graphColor}
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

export default AssetGraph;