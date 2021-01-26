import { connect } from "react-redux";
import { deleteHolding, createHolding, updateHolding } from "../../../actions/holding_actions";
import { createTransaction } from "../../../actions/transaction_actions";
import {updateBuyingPower} from "../../../actions/user_actions"
import AssetSidebar from "./asset_sidebar";

const mapStateToProps = (state, ownProps) => {
  return {
    ownedAsset: state.entities.ownedAssets[ownProps.asset.tickerSymbol],
    watchedAsset: state.entities.watchedAssets[ownProps.asset.tickerSymbol],
    currentUser: state.session.currentUser,
    asset: ownProps.asset,
  };
};

const mapDispatchToProps = (dispatch) => ({
  unwatchAsset: (holdingId) => dispatch(deleteHolding(holdingId)),
  watchAsset: (userId, assetId, amount, price) =>
    dispatch(createHolding(userId, assetId, amount, price)),
  createTransaction: (transaction) => dispatch(createTransaction(transaction)),
  updateHolding: (holdingId, amount, price) => dispatch(updateHolding(holdingId, amount, price)),
  updateBuyingPower: (userId, amount) => dispatch(updateBuyingPower(userId, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetSidebar);
