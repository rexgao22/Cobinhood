import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./util/session_util";

document.addEventListener("DOMContentLoaded", () => {
  //test
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  //end

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Cobinhood</h1>, root);
});
