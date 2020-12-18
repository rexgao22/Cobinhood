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
  setSuccessMsg(msg) {
    this.setState({ successMsg: msg });
  }
  displayTradeFrom() {
    return (
      <div>
        <TradeForm
          asset={this.props.asset}
          buyingPower={this.props.currentUser.buyingPower}
          amount={this.props.ownedAsset.amount}
          successMessage={(msg) => this.successMsg(msg)}
          buyAsset={(amountBuy) =>
            this.props.buyAsset(
              this.props.currentUser.id,
              this.props.ownedAsset.holdingId,
              this.props.ownedAsset.amount,
              amountBuy
            )
          }
          sellAsset={(amountSell) =>
            this.props.buyAsset(
              this.props.currentUser.id,
              this.props.ownedAsset.holdingId,
              this.props.ownedAsset.amount,
              amountSell
            )
          }
        />
      </div>
    );
  }

  displayBuyOnlyForm() {
    return (
      <div >
        <BuyOnlyForm
          asset={this.props.asset}
          buyingPower={this.props.currentUser.buyingPower}
          amount={this.props.currentUser.amount}
          assetType="Watched Asset"
          successMessage={(msg) => this.successMsg(msg)}
          assetAction={() =>
            this.props.deleteHolding(this.props.watchedAsset.holdingId)
          }
          purchaseAction={(amountBuy) =>
            this.props.buyAsset(
              this.props.currentUser.id,
              this.props.watchedAsset.holdingId,
              0,
              amountBuy
            )
          }
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
          successMessage={(msg) => this.successMsg(msg)}
          assetAction={() =>
            this.props.createHolding(this.props.currentUser.id)
          }
          purchaseAction={(amountBuy) =>
            this.props.buyNewAsset(this.props.currentUser.id, amountBuy)
          }
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
  
    return(
      <div className="asset-sidebar-container"> 
        {this.display()}
      </div>
    )
  }
}

export default AssetSidebar;
