import {
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import {
  UPDATE_ASSET, 
  RECEIVE_PORTFOLIO_DATA,
} from "../actions/asset_actions";
import { RECEIVE_HOLDINGS } from "../actions/holding_actions";
import {obtainPricesAndChange } from "./obtain_price_and_change"

const watchedAssetsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentResponse.assets) {
        Object.values(action.currentResponse.assets).forEach((asset) => {
          if (!asset.amount) {
            nextState[asset.tickerSymbol] = asset;
            delete nextState[asset.tickerSymbol].amount;
          }
        });
      }
      return nextState;
    case RECEIVE_HOLDINGS:
      if (action.holdings) {
        Object.values(action.holdings).forEach((asset) => {
          if (!asset.amount) {
            nextState[asset.tickerSymbol] = asset;
            delete nextState[asset.tickerSymbol].amount;
          }
        });
      }
      return nextState;
    case UPDATE_ASSET:
      if (nextState[action.asset.tickerSymbol]) {
        nextState[action.asset.tickerSymbol].price = action.asset.price;
        return nextState;
      } else {
        return oldState;
      }
    case RECEIVE_PORTFOLIO_DATA:
      obtainPricesAndChange(action.tickerKeyToData).forEach((updateObject) => {
        if (nextState[updateObject.tickerSymbol]) {
          nextState[updateObject.tickerSymbol].price = updateObject.price;
          nextState[updateObject.tickerSymbol].percentChange =
            updateObject.percentChange;
        }
      });
      return nextState;
    default:
      return oldState;
  }
};

export default watchedAssetsReducer;