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
      showPurchaseError: false,
    };
    this.selectTab = this.selectTab.bind(this);
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
      return false;
    }
  }

  selectedTab(type) {
    this.setState({ status: type, showPurchaseError: false });
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
      this.props.buyAction(parseInt(this.state.shares));
      this.props.successMsg(
        `You bought ${this.state.shares} shares of ${this.props.asset.tickerSymbol}`
      );
    } else {
      this.setState({ showPurchaseError: true });
    }
  }

  render() {
    const spanText = this.state.status === "buy" ? "Cost" : "Credit";
    const portValueDisplay =
      this.state.status === "buy" ? (
        <span>
          {`$
            ${this.props.buyingPower.toLocaleString("en", {
              minimumFractionDigits: 2,
            })}
            Buying Power Available `}
        </span>
      ) : (
        <span>{this.props.amount} shares Available</span>
      );
    const errorMsg = this.state.showPurchaseError ? (
      <span>Please enter a valid number of shares.</span>
    ) : null;

    const colorClass = this.props.asset.percentChange < 0 ? "red" : "green";
    return (
      <div className={`asset-sidebar ${colorClass}`}>
        <Headers
          status={this.state.status}
          selectedTab={this.selectedTab}
          tickerSymbol={this.props.asset.tickerSymbol}
        />
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
            <span>Estimated {spanText}</span>
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
        <div className="portValue-display">{portValueDisplay}</div>
      </div>
    );
  }
}

export default TradeForm;
