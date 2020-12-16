import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import watchedAssetsReducer from "./watched_assets_reducer";
import ownedAssetsReducer from "./owned_assets_reducer"
import portfolioGraphReducer from "./portfolio_graph_reducer"
import newsReducer from "./news_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  watchedAssets: watchedAssetsReducer,
  ownedAssets: ownedAssetsReducer,
  portfolioGraph: portfolioGraphReducer,
  news: newsReducer,
});

export default entitiesReducer;