import React from "react";

const TradeFormHeader = ({ status, selectedTab, tickerSymbol }) => {
  const [buyTab, sellTab] =
    status === "buy"
      ? ["header-tab selected", "header-tab"]
      : ["header-tab", "header-tab selected"];
  return (
    <div className="header-tabs">
      <div className={buyTab} onClick={() => selectedTab("buy")}>
        Buy {tickerSymbol}
      </div>
      <div className={sellTab} onClick={() => selectedTab("sell")}>
        Sell {tickerSymbol}
      </div>
    </div>
  );
};

export default TradeFormHeader;
