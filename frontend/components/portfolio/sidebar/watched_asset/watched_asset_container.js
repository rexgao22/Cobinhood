import {connect} from "react-redux";
import WatchedAsset from "./watched_asset";

const mapStateToProps = state => ({
    assets: Object.values(state.entities.watchedAssets)
});

export default connect(mapStateToProps)(WatchedAsset);