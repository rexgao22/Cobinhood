import * as AssetUtil from "../util/asset_util";

export const RECEIVE_ASSET = "RECEIVE_ASSET";
export const RECEIVE_ASSETS = "RECEIVE_ASSETS";
export const UPDATE_ASSET = "UPDATE_ASSET";
export const RECEIVE_PORTFOLIO_DATA = "RECEIVE_PORTFOLIO_DATA";

const receiveAsset = (asset) => ({
  type: RECEIVE_ASSET,
  asset,
});

const receiveAssets = (assets) => ({
  type: RECEIVE_ASSETS,
  assets,
});

const updateAsset = (asset) => ({
  type: UPDATE_ASSET,
  asset,
});

const receivePortfolioData = (tickerKeyToData, ownedAssets, buyingPower) => ({
  type: RECEIVE_PORTFOLIO_DATA,
  tickerKeyToData,
  ownedAssets,
  buyingPower,
});

export const fetchAsset = (tickerSymbol) => (dispatch) =>
  AssetUtil.fetchAsset(tickerSymbol).then((asset) =>
    dispatch(receiveAsset(asset))
  );

export const fetchAssets = () => (dispatch) =>
  AssetUtil.fetchAssets().then((assets) => dispatch(receiveAssets(assets)));

export const updateAssetPrice = (assetId, newPrice) => (dispatch) =>
  AssetUtil.updateAssetPrice(assetId, newPrice).then((asset) =>
    dispatch(updateAsset(asset))
  );

export const updatePortfolio = (tickerSymbols, ownedAssets, buyingPower) => (
  dispatch
) => {
  const graphFetches = [];
  const tickerKeyToData = {};
  tickerSymbols.forEach((tickerSymbol) => {
    const graphFetch = AssetUtil.fetchDailyGraphData(tickerSymbol);
    tickerKeyToData[tickerSymbol] = graphFetch;
    graphFetches.push(graphFetch);
  });
  return Promise.all(graphFetches).then(() =>
    dispatch(receivePortfolioData(tickerKeyToData, ownedAssets, buyingPower))
  );
};
