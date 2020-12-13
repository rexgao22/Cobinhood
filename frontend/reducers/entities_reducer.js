import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import watchedAssetsReducer from "./watched_assets_reducer";
import ownedAssetsReducer from "./owned_assets_reducer"


const entitiesReducer = combineReducers({
  users: usersReducer,
  watchedAssets: watchedAssetsReducer,
  ownedAssets: ownedAssetsReducer,
});

export default entitiesReducer;