export const fetchAsset = (tickerSymbol) =>
  $.ajax({
    url: `api/assets/${tickerSymbol}`,
  });

export const fetchAssets = () =>
  $.ajax({
    url: "api/assets",
  });
  
export const updateAssetPrice = (assetId, newPrice) =>
  $.ajax({
    method: "PATCH",
    url: `api/assets/${assetId}`,
    data: { price: newPrice },
  });

export const fetchCompanyData = (tickerSymbol) =>
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${tickerSymbol}/company?token=${window.cloudIEXAPIKey}`,
    method: "GET",
  });

export const fetchDailyGraphData = (tickerSymbol) =>
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${tickerSymbol.toLowerCase()}/intraday-prices?token=${
      window.cloudIEXAPIKey
    }`,
    method: "GET",
  });
