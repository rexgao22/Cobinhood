import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";
import {withRouter} from "react-router"

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.session.currentUser,
    path: ownProps
  };
};
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));
