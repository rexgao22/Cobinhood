import { RECEIVE_CURRENT_USER} from "../actions/session_actions";

const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return {
          ...oldState,
          [action.currentResponse.user.id]: action.currentResponse.user,
        };

      default:
        return oldState;
    }
}

export default usersReducer;