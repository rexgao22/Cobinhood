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
          user={this.props.currentUser}
          asset={this.props.asset}
          buyingPower={this.props.currentUser.buyingPower}
          amount={this.props.currentUser.amount}
          assetType="Watched Asset"
          watchAsset={this.props.watchAsset}
          unwatchAsset={this.props.unwatchAsset}
          createTransaction={this.props.createTransaction}
          holdingId={this.props.watchedAsset.holdingId}
        />
      </div>
    );
  }

  displayBuyOnlyForNewAssetForm() {
    return (
      <div>
        <BuyOnlyForm
          user={this.props.currentUser}
          asset={this.props.asset}
          buyingPower={this.props.currentUser.buyingPower}
          assetType="New Asset"
          watchAsset={this.props.watchAsset}
          unwatchAsset={this.props.unwatchAsset}
          createTransaction={this.props.createTransaction}
          holdingId=""
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
