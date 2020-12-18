import { connect } from "react-redux";
import {
  deleteHolding,
  sellAsset,
  buyAsset,
  buyNewAsset,
  createHolding,
} from "../../../actions/asset_actions";
import AssetSidebar from "./asset_sidebar";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  asset: ownProps.asset,
  ownedAsset: state.entities.ownedAssets[ownProps.asset.tickerSymbol],
  watchedAsset: state.entities.watchedAssets[ownProps.asset.tickerSymbol],
});

const mapDispatchToProps = (dispatch) => ({
  deleteHolding: (holdingId) => dispatch(deleteHolding(holdingId)),
  sellAsset: (userId, holdingId, oldAmount, amountSell) =>
    dispatch(sellAsset(userId, holdingId, oldAmount, amountSell,ownProps.asset.price)),
  buyAsset: (userId, holdingId, oldAmount, amountBuy) =>
    dispatch(buyAsset(userId, holdingId, oldAmount, amountBuy, ownProps.asset.price)),
  buyNewAsset: (userId, amount) =>
    dispatch(buyNewAsset(userId, ownProps.asset.id, amount, ownProps.asset.price)),
  createHolding: (userId) =>
    dispatch(createHolding(ownProps.asset.id, userId, 0, price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetSidebar);