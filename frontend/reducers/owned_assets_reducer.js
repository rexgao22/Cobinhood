
import { UPDATE_ASSET, RECEIVE_PORTFOLIO_DATA} from "../actions/asset_actions";
import { RECEIVE_HOLDINGS, WATCH_ASSET } from "../actions/holding_actions";
import { obtainPricesAndChange } from "./obtain_price_and_change";

const ownedAssetsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_HOLDINGS:
      if (action.holdings) {
        Object.values(action.holdings).forEach((asset) => {
          if (asset.amount) {
            nextState[asset.tickerSymbol] = asset;
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
    case WATCH_ASSET:
      if (action.asset.amount !== 0) {
        nextState[action.asset.tickerSymbol] = action.asset;
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

export default ownedAssetsReducer;
