export const obtainPricesAndChange = (tickerKeyToData) => {
  return Object.keys(tickerKeyToData).map((tickerSymbol) => {
    const tickerMap = { tickerSymbol };
    const data = tickerKeyToData[tickerSymbol].responseJSON;
    let i = data.length - 1;
    while (!data[i].average) {
      i--;
    }
    const endOfDayPrice = data[i].average;
    let j = 0;
    while (!data[j].average) {
      j++;
    }
    const startOfDayPrice = data[j].average;
    tickerMap["price"] = Math.trunc(endOfDayPrice *100)/100;
    tickerMap["percentChange"] = Math.trunc(
      (endOfDayPrice / startOfDayPrice - 1) * 10000
    )/100;
    return tickerMap;
  });
};
