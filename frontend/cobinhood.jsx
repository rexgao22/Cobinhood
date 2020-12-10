import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {logout} from "./util/session_util";
document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser},
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  window.getState = store.getState;
  window.logout = logout;
  //end
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
