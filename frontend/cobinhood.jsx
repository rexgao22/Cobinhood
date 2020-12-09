import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { signup, login, logout } from "./util/session_util";

document.addEventListener("DOMContentLoaded", () => {
  //test
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  //end
  const store = configureStore();
  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
