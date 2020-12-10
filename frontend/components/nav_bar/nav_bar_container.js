import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    buyingPower: state.session.currentUser.buyingPower,
  };
};
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
