import { connect } from "react-redux";
import OwnedAsset from "./owned_asset";

const mapStateToProps = (state) => ({
  assets: Object.values(state.entities.ownedAssets),
});

export default connect(mapStateToProps)(OwnedAsset);
