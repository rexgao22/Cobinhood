import * as APIUtil from "../util/asset_util";
import { updateBuyingPower } from "../util/buying_power_util";

export const WATCH_ASSET = "WATCH_ASSET";
export const UNWATCH_ASSET = "UNWATCH_ASSET";
export const UPDATE_ASSET = "UPDATE_ASSET";
export const UPDATE_HOLDING = "UPDATE_HOLDING";
export const RECEIVE_NEW_BUYING_POWER = "RECEIVE_NEW_BUYING_POWER";
export const RECEIVE_PURCHASE_ERRORS = "RECEIVE_PURCHASE_ERRORS";
export const RECEIVE_PORTFOLIO_DATA = "RECEIVE_PORTFOLIO_DATA";

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

export const receiveNewBuyingPower = buyingPower =>({
    type: RECEIVE_NEW_BUYING_POWER,
    buyingPower
})

export const updateHolding = (asset) => ({
  type: UPDATE_HOLDING,
  asset,
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

export const updateUserBuyingPower = (userId, BPChange) => dispatch =>(
    updateBuyingPower(userId, BPChange).then((buyingPower) => dispatch(receiveBuyingPower(buyingPower)))
)

export const sellAsset = ((userId,
holdingId,
oldAmount,
amountSell,
price) = APIUtil.updateHoldingAmount(holdingId, oldAmount - amountSell).then(
  (asset) => {
    (asset.price = price), dispatch(updateHolding(asset));
  }
).then(()=>updateBuyingPower(userId,(amountSell*price)))
.then((buyingPower)=> dispatch(receiveNewBuyingPower(buyingPower)))
);

export const buyAsset = (userId, holdingId, oldAmount, amountBuy, price) => dispatch(
  updateBuyingPower(userId,(amountBuy*price*-1))
)
