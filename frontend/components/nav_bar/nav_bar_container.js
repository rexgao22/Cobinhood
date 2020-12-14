import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";
import {withRouter} from "react-router"

const mapStateToProps = (state,ownProps) => {
  const ownedAssets = Object.values(state.entities.ownedAssets);
  let holdingValue = 0;
  ownedAssets.forEach((asset)=>{
    holdingValue += asset.amount * asset.price
  });
  return {
    currentUser: state.session.currentUser,
    holdingValue,
    path: ownProps,
  };
};
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));
