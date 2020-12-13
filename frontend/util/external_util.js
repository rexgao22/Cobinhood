export const fetchNews = (amount) => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/aapl/news/last/${amount}?token=pk_10e22efda7b648c89a22a67f1cd90719`,
    method: "GET",
  });
};

export const fetchCompanyData = (tickerSymbol) =>
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${tickerSymbol}/company?token=pk_10e22efda7b648c89a22a67f1cd90719`,
    method: "GET",
  });

export const fetchCompanyNews = (tickerSymbol) =>
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${tickerSymbol.toLowerCase()}/news/last/8?token=pk_10e22efda7b648c89a22a67f1cd90719`,
    method: "GET",
  });

export const fetchDailyGraphData = (tickerSymbol) =>
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${tickerSymbol.toLowerCase()}/intraday-prices?token=pk_10e22efda7b648c89a22a67f1cd90719`,
    method: "GET",
  });
