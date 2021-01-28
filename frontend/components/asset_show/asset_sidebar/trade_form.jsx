import React from "react";
import TradeFormHeader from "./trade_form_header";

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "buy",
      shares: "",
      cost: 0,
      inputStatu: false,
      inputError: false,
      transactionError: false,
      sellError: false,
      successMsg: false,
      buyingPower: this.props.buyingPower,
      amount: this.props.amount,
    };
    this.selectedTab = this.selectedTab.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkBuyingPower = this.checkBuyingPower.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
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
    this.setState({
      status: type,
      inputError: false,
      transactionError: false,
      sellError: false,
      successMsg: false,
    });
  }

  update(e) {
    const valid = this.checkInput(e.target.value);
    if (valid) {
      this.setState({
        shares: e.target.value,
        cost: this.props.asset.price * parseInt(e.target.value),
        inputStatu: valid,
        inputError: false,
      });
    } else {
      this.setState({
        shares: e.target.value,
        cost: 0,
        inputStatu: valid,
        inputError: false,
      });
    }
  }

  checkBuyingPower() {
    const newBuyingPower =
      this.props.user.buyingPower -
      parseInt(this.state.shares) * this.props.asset.price;
    if (newBuyingPower >= 0) {
      return true;
    }
    return false;
  }

  checkAmount() {
    const newAmount = this.props.amount - parseInt(this.state.shares);
    if (newAmount >= 0) {
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    if (this.state.inputStatu) {
      if (this.state.status === "buy") {
        if (this.checkBuyingPower()) {
          this.props
            .updateBuyingPower(
              this.props.user.id,
              this.props.buyingPower - this.state.cost
            )
            .then(() => {
              this.props.updateHolding(
                this.props.holdingId,
                parseInt(this.state.shares) + this.state.amount,
                this.props.asset.price
              );
            })
            .then(() => {
              this.setState({
                buyingPower: this.state.buyingPower - this.state.cost,
                amount: this.state.amount + parseInt(this.state.shares),
                successMsg: true,
                shares: "0",
                cost: 0,
              });
            });
        } else {
          this.setState({ transactionError: true, successMsg: false });
        }
      } else {
        if (this.checkAmount()) {
          this.props
            .updateBuyingPower(
              this.props.user.id,
              this.props.buyingPower + this.state.cost
            )
            .then(() => {
              this.props.updateHolding(
                this.props.holdingId,
                this.state.amount - parseInt(this.state.shares),
                this.props.asset.price
              );
            })
            .then((res) => {
              this.setState({
                buyingPower: this.state.buyingPower - this.state.cost,
                amount: this.state.amount - parseInt(this.state.shares),
                successMsg: true,
                shares: "0",
                cost: 0,
              });
            });
        } else {
          this.setState({ sellError: true, successMsg: false });
        }
      }
    } else {
      this.setState({ inputError: true, successMsg: false });
    }
  }

  render() {
    const errorClass = this.state.inputError ? "error-show" : "error-hide";
    const spanText = this.state.status === "buy" ? "Cost" : "Credit";
    const portValueDisplay =
      this.state.status === "buy" ? (
        <span>
          {`$
            ${this.state.buyingPower.toFixed(2).toLocaleString("en-US")}
            Buying Power Available `}
        </span>
      ) : (
        <span>{this.state.amount} shares Available</span>
      );

    const errorMsg = this.state.inputError ? (
      <span>Please enter a valid number of shares.</span>
    ) : null;

    const transcationErrorMsg = this.state.transactionError ? (
      <span>Not enough buyingPower</span>
    ) : null;

    const sellErrorMsg = this.state.sellError ? (
      <span>exceed {this.state.amount} shares to sell</span>
    ) : null;

    const displaySucccessMsg = this.state.successMsg
      ? this.state.status === "buy"
        ? `successfully bought shares of ${this.props.asset.tickerSymbol}`
        : `successfully sold shares of ${this.props.asset.tickerSymbol}`
      : null;
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
            <span>${this.state.cost.toFixed(2).toLocaleString("en-US")}</span>
          </div>
          <div className="sidebar-errors">
            <div className={errorClass}>
              <i className="fas fa-exclamation-circle"></i>
              <span>Error</span>
            </div>
            <span>
              {errorMsg}
              {transcationErrorMsg}
              {sellErrorMsg}
              {displaySucccessMsg}
            </span>
          </div>
          <button onClick={this.handleSubmit}>{"Place Order"}</button>
        </div>
        <div className="portValue-display">{portValueDisplay}</div>
      </div>
    );
  }
}

export default TradeForm;
