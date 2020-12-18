import * as APIUtil from "../util/asset_util";
import { updateBuyingPower } from "../util/buying_power_util";
import { fetchDailyGraphData } from "../util/external_util";

export const WATCH_ASSET = "WATCH_ASSET";
export const UNWATCH_ASSET = "UNWATCH_ASSET";
export const UPDATE_ASSET = "UPDATE_ASSET";
export const UPDATE_HOLDING = "UPDATE_HOLDING";
export const RECEIVE_NEW_BUYING_POWER = "RECEIVE_NEW_BUYING_POWER";
export const RECEIVE_PORTFOLIO_DATA = "RECEIVE_PORTFOLIO_DATA";
export const RECEIVE_PURCHASE_ERRORS = "RECEIVE_PURCHASE_ERRORS";

export const watchAsset = (asset) => ({
  type: WATCH_ASSET,
  asset,
});

export const unwatchAsset = (tickerSymbol) => ({
  type: DELETE_HOLDING,
  tickerSymbol,
});

export const updateAsset = (asset) => ({
  type: UPDATE_ASSET,
  asset,
});

export const receiveNewBuyingPower = (buyingPower) => ({
  type: RECEIVE_NEW_BUYING_POWER,
  buyingPower,
});

export const updateHolding = (asset) => ({
  type: UPDATE_HOLDING,
  asset,
});

export const receivePortfolioData = (tickerKeyToData, ownedAssets, buyingPower) => ({
  type: RECEIVE_PORTFOLIO_DATA,
  tickerKeyToData,
  ownedAssets,
  buyingPower,
});

export const receivePurchaseErrors = (errors) => ({
  type: RECEIVE_PURCHASE_ERRORS,
  errors,
});




export const createHolding = (assetId, userId, amount, price) => (dispatch) =>
  APIUtil.createHolding(assetId, userId, amount).then((asset) => {
    (asset.price = price), dispatch(watchAsset(asset));
  });

export const deleteHolding = (holdingId) => (dispatch) =>
  APIUtil.deleteHolding(holdingId).then((asset) =>
    dispatch(unwatchAsset(asset.tickerSymbol))
  );

export const updateAssetPrice = (assetId, newPrice) => (dispatch) =>
  APIUtil.updateAssetPrice(assetId, newPrice).then((asset) =>
    dispatch(updateAsset(asset))
  );

export const updateHoldingAmount = (holdingId, newAmount, price) => (
  dispatch
) =>
  APIUtil.updateHoldingAmount(holdingId, newAmount).then((asset) => {
    (asset.price = price), dispatch(updateHolding(asset));
  });

export const updateUserBuyingPower = (userId, BPChange) => (dispatch) =>
  updateBuyingPower(userId, BPChange)
    .then((buyingPower) => dispatch(receiveBuyingPower(buyingPower)))
    .fail((err) => dispatch(receivePurchaseErrors(err.responseJSON)));

export const sellAsset = (userId, holdingId, oldAmount, amountSell, price) => (
  dispatch
) =>
  APIUtil.updateHoldingAmount(holdingId, oldAmount - amountSell)
    .then((asset) => {
      (asset.price = price), dispatch(updateHolding(asset));
    })
    .then(() => updateBuyingPower(userId, amountSell * price))
    .then((buyingPower) => dispatch(receiveNewBuyingPower(buyingPower)))
    .fail((err) => dispatch(receivePurchaseErrors(err.responseJSON)));

export const buyAsset = (userId, holdingId, oldAmount, amountBuy, price) => (
  dispatch
) =>
  updateBuyingPower(userId, amountBuy * price * -1)
    .then((buyingPower) => dispatch(receiveNewBuyingPower(buyingPower)))
    .then(() =>
      dispatch(updateHoldingAmount(holdingId, oldAmount + amountBuy, price))
    )
    .fail((err) => dispatch(receivePurchaseErrors(err.responseJSON)));

export const buyNewAsset = (userId, assetId, amount, price) => (dispatch) =>
  updateBuyingPower(userId, amountBuy * price * -1)
    .then((buyingPower) => dispatch(receiveNewBuyingPower(buyingPower)))
    .then(() => dispatch(createHolding(assetId, userId, amount, price)))
    .fail((err) => dispatch(receivePurchaseErrors(err.responseJSON)));

export const updatePortfolio = (tickerSymbols, ownedAssets, buyingPower) => (
  dispatch
) => {
  const graphFetches = [];
  const tickerKeyToData = {};
  tickerSymbols.forEach((tickerSymbol) => {
    const graphFetch = fetchDailyGraphData(tickerSymbol);
    tickerKeyToData[tickerSymbol] = graphFetch;
    graphFetches.push(graphFetch)
  });
  return Promise.all(graphFetches).then(() =>
    dispatch(receivePortfolioData(tickerKeyToData, ownedAssets, buyingPower))
  );
};

