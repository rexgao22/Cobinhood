import React, { Component } from "react";

class BuyOnlyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: "",
      cost: "0.00",
      inputStatu: false,
      transacionError: false,
      watchType: this.props.assetType,
      holdingId: this.props.holdingId,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWatch = this.handleWatch.bind(this);
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

  handleWatch(e) {
    e.preventDefault();
    if (this.state.watchType === "Watched Asset") {
      this.props.unwatchAsset(this.state.holdingId);
      this.setState({ watchType: "New Asset" });
    } else {
      this.props
        .watchAsset(
          this.props.user.id,
          this.props.asset.id,
          0,
          this.props.asset.price
        )
        .then((res) => {
          this.setState({
            holdingId: res.asset.holdingId,
            watchType: "Watched Asset",
          });
        });
    }
  }

  handleSubmit(e) {
    if (this.state.inputStatu) {
      this.props.createTransaction(parseInt(this.state.shares));
    } else {
      this.setState({ transacionError: true });
    }
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
  render() {
    console.log("holdingId", this.props.asset.id);
    const errorClass = this.state.transacionError ? "error-show" : "error-hide";
    const buttonText =
      this.state.watchType === "Watched Asset"
        ? `Unwatch ${this.props.asset.tickerSymbol}`
        : `Watch ${this.props.asset.tickerSymbol}`;

    const errorMsg = this.state.transacionError ? (
      <span>Please enter a valid number of shares.</span>
    ) : null;

    const colorClass = this.props.asset.percentChange < 0 ? "red" : "green";
    return (
      <div className={`asset-sidebar ${colorClass}`}>
        <div className="buy-only-header">
          <header>{`Buy ${this.props.asset.tickerSymbol}`}</header>
        </div>
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
              ${this.props.asset.price.toFixed(2).toLocaleString("en")}
            </span>
          </div>
          <div className="estimate-content">
            <span>Estimated Cost</span>
            <span>${this.state.cost}</span>
          </div>
          <div className="sidebar-errors">
            <div className={errorClass}>
              <i className="fas fa-exclamation-circle"></i>
              <span>Error</span>
            </div>
            {errorMsg}
          </div>
          <button onClick={this.handleSubmit}>{"Review Order"}</button>
        </div>
        <div className="portValue-display">
          <span>
            {`$
            ${this.props.buyingPower.toFixed(2).toLocaleString("en")}
            Buying Power Available `}
          </span>
        </div>
        <div className="watch-button">
          <button onClick={this.handleWatch}>{buttonText}</button>
        </div>
      </div>
    );
  }
}

export default BuyOnlyForm;
