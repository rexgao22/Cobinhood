import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";
import {
  WATCH_ASSET, //RECEIVE_NEW_ASSET,
  UNWATCH_ASSET,
  UPDATE_ASSET, //UPDATE_ASSET_PRICE
  UPDATE_HOLDING,
  RECEIVE_PORTFOLIO_DATA,
} from "../actions/asset_actions";
import {obtainPricesAndChange } from "./obtain_price_and_change"



const watchedAssetsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentResponse.assets) {
        //res for response data
        Object.values(action.currentResponse.assets).forEach((asset) => {
          if (!asset.amount) {
            nextState[asset.tickerSymbol] = asset;
            delete nextState[asset.tickerSymbol].amount;
          }
        });
      }
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    case UPDATE_ASSET:
      if (nextState[action.asset.tickerSymbol]) {
        nextState[action.asset.tickerSymbol].price = action.asset.price;
        return nextState;
      } else {
        return oldState;
      }
    case UNWATCH_ASSET:
      delete nextState[action.ticker]; 
      return nextState;
    case UPDATE_HOLDING:
      if (action.asset.amount) {
        delete nextState[action.asset.tickerSymbol];
      } else {
        nextState[action.asset.tickerSymbol] = action.asset;
        delete nextState[action.asset.tickerSymbol].quantity;
      }
      return nextState;
    case WATCH_ASSET:
      if (action.asset.amount) {
        return oldState;
      } else {
        nextState[action.asset.tickerSymbol] = action.asset;
        delete nextState[action.asset.tickerSymbol].amount;
        return nextState;
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