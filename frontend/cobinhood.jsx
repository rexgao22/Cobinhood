import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { logout } from "./util/session_util";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./local_storage";


document.addEventListener("DOMContentLoaded", () => {
  // let store;
  let preloadedState = {};
  // if (window.currentUser) {
  //   const preloadedState = {
  //     session: { currentUser: window.currentUser },
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser },
  //     },
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
  if (window.currentUser) {
    preloadedState.session = {};
    preloadedState.session.currentUser = window.currentUser;
  }
  const persistedState = loadState();
  if (persistedState) {
    preloadedState.entities = persistedState.entities;
    // preloadedState.entities.news = [];
  }
  const store = configureStore(preloadedState);
  delete window.currentUser;

  store.subscribe(
    throttle(() => {
      saveState({
        entities: store.getState().entities,
      });
    }, 1000)
  );
  //test
  window.getState = store.getState;
  window.logout = logout;
  //end
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
