export const fetchNews = (amount) => {
  return $.ajax({
    url: `https://financialmodelingprep.com/api/v3/stock_news?limit=${amount}&apikey=${window.fmpAPIKey}`,
    method: "GET",
  });
};

export const fetchCompanyData = (tickerSymbol) =>
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/profile/${tickerSymbol}?apikey=${window.fmpAPIKey}`,
    method: "GET",
  });

export const fetchCompanyNews = (tickerSymbol) =>
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/stock_news?tickers=${tickerSymbol}&limit=5&apikey=${window.fmpAPIKey}`,
    method: "GET",
  });

export const fetchOneDayGraphData = (tickerSymbol) =>
  $.ajax({
    url: `http://api.marketstack.com/v1/intraday?access_key=${window.marketstackAPIKey}symbols=${tickerSymbol}`,
    method: "GET",
  });
