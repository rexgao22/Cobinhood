import { RECEIVE_PORTFOLIO_DATA } from "../actions/asset_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const portfolioGraphReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PORTFOLIO_DATA:
      const portfolioGraph = [];
      const tickers = Object.keys(action.ownedAssets);
      if (tickers.length) {
        let i = 0;
        while (
          i < Object.values(action.tickerKeyToData)[0].responseJSON.length
        ) {
          const dataPoint = {
            label: action.tickerKeyToData[tickers[0]].responseJSON[i].label,
            portfolioValue: action.buyingPower,
          };
          tickers.forEach((ticker) => {
            let j = i;
            const data = action.tickerKeyToData[ticker].responseJSON;

            while (!data[j].average) {
              j++;
              if (j > data.length - 1) break;
            }
            if (j === data.length) {
              j--;
              while (!data[j].average) {
                j--;
              }
            }
            dataPoint.portfolioValue +=(data[j].average) *
              action.ownedAssets[ticker].amount;
          });
          portfolioGraph.push(dataPoint);
          i += 5;
        }
        i = action.tickerKeyToData[tickers[0]].responseJSON.length - 1;
        const dataPoint = {
          label: action.tickerKeyToData[tickers[0]].responseJSON[i].label,
          portfolioValue: action.buyingPower,
        };
        tickers.forEach((ticker) => {
          let j = i;
          const data = action.tickerKeyToData[ticker].responseJSON;
          while (!data[j].average) {
            j--;
          }

          dataPoint.portfolioValue +=
            (data[j].average) *
            action.ownedAssets[ticker].amount;
        });
        portfolioGraph.push(dataPoint);
        return portfolioGraph;
      } else {
        return oldState;
      }
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default portfolioGraphReducer;
