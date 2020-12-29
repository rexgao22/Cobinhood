import React from "react";
import TradeFormHeader from "./trade_form_header";

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "buy",
      shares: "",
      cost: "0.00",
      inputStatu: false,
      transacionError: false,
    };
    this.selectedTab = this.selectedTab.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkInput(userInput) {
    const input = parseInt(userInput);
    if (userInput.trim() !== input.toString()) {
      //incase of "123 345"
      return false;
    } else if (typeof input === "undefind" || input < 0) {
      return false;
    } else {
      return true;
    }
  }

  selectedTab(type) {
    this.setState({ status: type, transacionError: false });
  }

  update(e) {
    const valid = this.checkInput(e.target.value);
    if (valid) {
      this.setState({
        shares: e.target.value,
        cost: (this.props.asset.price * parseInt(e.target.value))
          .toFixed(2)
          .toLocaleString("en-US"),
        inputStatu: valid,
        transacionError: false,
      });
    } else {
      this.setState({
        shares: e.target.value,
        cost: "0.00",
        inputStatu: valid,
        transacionError: false,
      });
    }
  }

  handleSubmit(e) {
    if (this.state.inputStatu) {
      if (this.state.status === "buy") {
        this.props.createTransaction(parseInt(this.state.shares));
        this.props.successMsg(
          `You bought ${this.state.shares} shares of ${this.props.asset.tickerSymbol}`
        );
      } else {
        this.props.createTransaction(parseInt(this.state.shares));
        this.props.successMsg(
          `You sold ${this.state.shares} shares of ${this.props.asset.tickerSymbol}`
        );
      }
    } else {
      this.setState({ transacionError: true });
    }
  }

  render() {
    const errorClass = this.state.transacionError
      ? "error-show"
      : "error-hide";
    const spanText = this.state.status === "buy" ? "Cost" : "Credit";
    const portValueDisplay =
      this.state.status === "buy" ? (
        <span>
          {`$
            ${this.props.buyingPower.toFixed(2).toLocaleString("en-US")}
            Buying Power Available `}
        </span>
      ) : (
        <span>{this.props.amount} shares Available</span>
      );

    const errorMsg = this.state.transacionError ? (
      <span>Please enter a valid number of shares.</span>
    ) : null;

    const colorClass = this.props.asset.percentChange < 0 ? "red" : "green";
    return (
      <div className={`asset-sidebar ${colorClass}`}>
        <TradeFormHeader
          status={this.state.status}
          selectedTab={this.selectedTab}
          tickerSymbol={this.props.asset.tickerSymbol}
        />
        <div className="trade-form">
          <div className="trade-form-part">
            <span>Shares</span>
            <input
              type="text"
              value={this.state.shares}
              placeholder="0"
              onChange={this.update}
            />
          </div>
          <div className="trade-form-part">
            <div>
              <span>Market Price</span>
              <i className="far fa-question-circle"></i>
            </div>
            <span>
              ${this.props.asset.price.toFixed(2).toLocaleString("en-US")}
            </span>
          </div>
          <div className="estimate-content">
            <span>Estimated {spanText}</span>
            <span>${this.state.cost}</span>
          </div>
          <div className="sidebar-errors">
            <div className={errorClass}>
              <i className="fas fa-exclamation-circle"></i>
              <span>Error</span>
            </div>
            <span>{errorMsg}</span>
          </div>
          <button onClick={this.handleSubmit}>{"Review Order"}</button>
        </div>
        <div className="portValue-display">{portValueDisplay}</div>
      </div>
    );
  }
}

export default TradeForm;
