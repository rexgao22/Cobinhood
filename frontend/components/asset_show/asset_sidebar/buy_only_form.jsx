import React, { Component } from "react";

class BuyOnlyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: "",
      cost: "0.00",
      inputStatu: false,
      showPurchaseError: false,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    const valid = this.checkInput(e.target.value);
    if (valid) {
      this.setState({
        shares: e.target.value,
        cost: (
          this.props.asset.price * parseInt(e.target.value)
        ).toLocaleString("en", { minimumFractionDigits: 2 }),
        inputStatu: valid,
        showPurchaseError: false,
      });
    } else {
      this.setState({
        shares: e.target.value,
        cost: "0.00",
        inputStatu: valid,
        showPurchaseError: false,
      });
    }
  }

  handleSubmit(e) {
    if (this.state.inputStatu) {
      if (this.state.status === "buy") {
        this.props.buyAsset(parseInt(this.state.shares));
        this.props.successMsg(
          `You bought ${this.state.shares} shares of ${this.props.asset.tickerSymbol}`
        );
      } else {
        this.props.sellAsset(parseInt(this.state.shares));
        this.props.successMsg(
          `You sold ${this.state.shares} shares of ${this.props.asset.tickerSymbol}`
        );
      }
    } else {
      this.setState({ showPurchaseError: true });
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
      return false;
    }
  }
  render() {
    const buttonText =
      this.props.assetType === "Watched Asset"
        ? `Unwatch ${this.props.asset.tickerSymbol}`
        : `Watch ${this.props.asset.tickerSymbol}`;

    const errorMsg = this.state.showPurchaseError ? (
      <span>Please enter a valid number of shares.</span>
    ) : null;

    const colorClass = this.props.asset.percentChange < 0 ? "red" : "green";
    return (
      <div className={`asset-sidebar ${colorClass}`}>
        <div>
          <header>{`Buy ${this.props.asset.tickerSymbol}`}</header>
        </div>
        <div>
          <div>
            <span>Shares</span>
            <input
              type="text"
              value={this.state.shares}
              placeholder="0"
              onChange={this.update}
            />
          </div>
          <div>
            <div>
              <span>Market Price</span>
              <i className="far fa-question-circle"></i>
            </div>
            <span>
              $
              {this.props.asset.price.toLocaleString("en", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
          <div>
            <span>Estimated Cost</span>
            <span>${this.state.cost}</span>
          </div>
          <div className="sidebar-form-errors">
            <div>
              <i class="fas fa-exclamation-circle"></i>
              <span>Error</span>
            </div>
            {errorMsg}
            {this.props.errors.map((error) => (
              <span>{error}</span>
            ))}
          </div>
          <button onClick={this.handleSubmit}>{"Review Order"}</button>
        </div>
        <div className="portValue-display">
          <span>
            {`$
            ${this.props.buyingPower.toLocaleString("en", {
              minimumFractionDigits: 2,
            })}
            Buying Power Available `}
          </span>
        </div>
        <div>
          <button onClick={() => this.props.assetAction()}>{buttonText}</button>
        </div>
      </div>
    );
  }
}

export default BuyOnlyForm;
