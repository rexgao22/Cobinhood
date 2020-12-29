import { connect } from "react-redux";
import { updateAssetPrice } from "../../../actions/asset_actions";
import { deleteHolding, createHolding } from "../../../actions/holding_actions";
import { createTransaction } from "../../../actions/transaction_actions";
import AssetSidebar from "./asset_sidebar";

const mapStateToProps = (state, ownProps) => {
  return {
    ownedAsset: state.entities.ownedAssets[ownProps.asset.ticker],
    watchedAsset: state.entities.watchedAssets[ownProps.asset.ticker],
    currentUser: state.session.currentUser,
    asset: ownProps.asset,
  };
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  unwatchAsset: (holdingId) => dispatch(deleteHolding(holdingId)),
  watchAsset: (userId) => dispatch(createHolding(ownProps.asset.id, userId, 0)),
  createTransaction: (transaction) => dispatch(createTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetSidebar);