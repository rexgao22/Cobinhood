import {connect} from 'react-redux';
import React from "react";
import { Link } from "react-router-dom";
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  navLink: <Link to="/login">Already have an account?</Link>,
  errors: state.errors.session,
  formType: "Sign Up",
});

const mapDispatchToProps = dispatch => ({
    action: (user)=> dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)