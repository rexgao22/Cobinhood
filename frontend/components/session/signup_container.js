import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  logProp: ["Have an account","Log In", '/login'],
  errors: state.errors.session,
  formType: "Sign Up",
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: () =>
    dispatch(login({ username: "Admin", password: "helloWorld" })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
