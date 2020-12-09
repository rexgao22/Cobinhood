import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  navLink: <Link to="/signup">Don't have an account?</Link>,
  errors: state.errors.session,
  formType: "Login",
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);