import Protfolio from "./portfolio";
import { connect } from "react-redux";
import { fetchHoldings } from '../../actions/holding_actions'
import { updatePortfolio } from "../../actions/asset_actions";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  ownedAssets: state.entities.ownedAssets,
  watchedAssets: state.entities.watchedAssets,
  buyingPower: state.session.currentUser.buyingPower,
  portfolioGraph: state.entities.portfolioGraph,
});
const mapDispatchToProps = (dispatch) => ({
  updatePortfolio: (tickerSymbols, ownedAssets, buyingPower) =>
    dispatch(updatePortfolio(tickerSymbols, ownedAssets, buyingPower)),
  login: (user) => dispatch(login(user)),
  fetchHoldings: () => dispatch(fetchHoldings()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Protfolio);
