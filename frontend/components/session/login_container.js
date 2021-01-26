import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  logProp: ["Register an account","Sign Up", '/signup'],
  errors: state.errors.session,
  formType: "Log In",
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: () =>
    dispatch(login({ username: "Admin", password: "helloWorld" })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);