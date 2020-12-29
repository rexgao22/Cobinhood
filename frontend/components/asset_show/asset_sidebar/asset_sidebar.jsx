import React, { Component } from "react";
import TradeForm from "./trade_form";
import BuyOnlyForm from "./buy_only_form";

class AssetSidebar extends Component {
  constructor(props) {
    super(props);
    this.displayTradeFrom = this.displayTradeFrom.bind(this);
    this.displayBuyOnlyForm = this.displayBuyOnlyForm.bind(this);
    this.display = this.display.bind(this);
  }

  displayTradeFrom() {
    return (
      <div>
        <TradeForm
          asset={this.props.asset}
          buyingPower={this.props.currentUser.buyingPower}
          amount={this.props.ownedAsset.amount}
          createTransaction={this.props.createTransaction}
        />
      </div>
    );
  }

  displayBuyOnlyForm() {
    return (
      <div>
        <BuyOnlyForm
          asset={this.props.asset}
          buyingPower={this.props.currentUser.buyingPower}
          amount={this.props.currentUser.amount}
          assetType="Watched Asset"
          assetAction={() =>
            this.props.unwatchAsset(this.props.watchedAsset.holdingId)
          }
          createTransaction={this.props.createTransaction}
        />
      </div>
    );
  }

  displayBuyOnlyForNewAssetForm() {
    return (
      <div>
        <BuyOnlyForm
          asset={this.props.asset}
          buyingPower={this.props.currentUser.buyingPower}
          assetType="New Asset"
          assetAction={() => this.props.watchAsset(this.props.currentUser.id)}
          createTransaction={this.props.createTransaction}
        />
      </div>
    );
  }
  display() {
    if (this.props.watchedAsset) {
      return this.displayBuyOnlyForm();
    } else if (this.props.ownedAsset) {
      return this.displayTradeFrom();
    } else {
      return this.displayBuyOnlyForNewAssetForm();
    }
  }
  render() {
    return <div className="asset-sidebar-container">{this.display()}</div>;
  }
}

export default AssetSidebar;
