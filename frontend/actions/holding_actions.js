import * as HOLDUtil from "../util/holding_util";
export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS";
export const WATCH_ASSET = "WATCH_ASSET";
export const UNWATCH_ASSET = "UNWATCH_ASSET";
export const UPDATE_HOLDING = 'UPDATE_HOLDING';

const watchAsset = (asset) => ({
  type: WATCH_ASSET,
  asset,
});

const unwatchAsset = (tickerSymbol) => ({
  type: UNWATCH_ASSET,
  tickerSymbol,
});

const receiveHoldings = (holdings) => ({
  type: RECEIVE_HOLDINGS,
  holdings,
});

const receiveNewAmounts = (asset) =>({
  type: UPDATE_HOLDING,
  asset,
})

export const createHolding = (userId, assetId, amount, price) => (dispatch) =>
  HOLDUtil.createHolding(userId, assetId, amount).then((asset) => {
    return dispatch(watchAsset({ ...asset, price: price }));
  });

export const deleteHolding = (holdingId) => (dispatch) =>
  HOLDUtil.deleteHolding(holdingId).then((asset) =>
    dispatch(unwatchAsset(asset.tickerSymbol))
  );

export const fetchHoldings = () => (dispatch) =>
  HOLDUtil.fetchHoldings().then((holdings) => dispatch(receiveHoldings(holdings)));

export const updateHolding = (holdingId, newAmount, price) => (dispatch) =>
  HOLDUtil.updateHolding(holdingId, newAmount).then((asset) => dispatch(receiveNewAmounts({...asset, price: price})))