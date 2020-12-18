export const fetchNews = () => {
  return $.ajax({
    url: `https://financialmodelingprep.com/api/v3/stock_news?limit=5?&apikey=${window.fmpAPIKey}`,
    method: "GET",
  });
};

export const fetchCompanyData = (tickerSymbol) =>
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${tickerSymbol}/company?token=${window.cloudIEXAPIKey}`,
    method: "GET",
  });

export const fetchCompanyNews = (tickerSymbol) =>
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/stock_news?tickers=${tickerSymbol.toUpperCase()}&limit=5&apikey=${window.fmpAPIKey}`,
    method: "GET",
  });

export const fetchDailyGraphData = (tickerSymbol) =>
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${tickerSymbol.toLowerCase()}/intraday-prices?token=${
      window.cloudIEXAPIKey
    }`,
    method: "GET",
  });
