import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_NEW_BUYING_POWER } from "../actions/user_actions";

const _nullUser = Object.freeze({
  currentUser: null,
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_NEW_BUYING_POWER:
      let nextState = Object.assign({}, oldState);
      nextState.currentUser.buyingPower = action.buyingPower;
      return nextState;
    default:
      return oldState;
  }
};

export default sessionReducer;
