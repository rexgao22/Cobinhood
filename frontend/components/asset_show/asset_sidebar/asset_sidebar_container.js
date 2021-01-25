import { connect } from "react-redux";
import { deleteHolding, createHolding } from "../../../actions/holding_actions";
import { createTransaction } from "../../../actions/transaction_actions";
import AssetSidebar from "./asset_sidebar";

const mapStateToProps = (state, ownProps) => {
  return {
    test: Object.values(state.entities.watchedAssets),
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetSidebar);
