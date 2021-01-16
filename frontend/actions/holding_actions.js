import * as HOLDUtil from "../util/holding_util";
export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS";
export const WATCH_ASSET = "WATCH_ASSET";
export const UNWATCH_ASSET = "UNWATCH_ASSET";

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

export const createHolding = (assetId, userId, amount) => (dispatch) =>
  HOLDUtil.createHolding(assetId, userId, amount).then((asset) => {
    (asset.price = price), dispatch(watchAsset(asset));
  });

export const deleteHolding = (holdingId) => (dispatch) =>
  HOLDUtil.deleteHolding(holdingId).then((asset) =>
    dispatch(unwatchAsset(asset.tickerSymbol))
  );

export const fetchHoldings = () => (dispatch) =>
  HOLDUtil.fetchHoldings().then((holdings) => {dispatch(receiveHoldings(holdings)),console.log("holdings", holdings)});
