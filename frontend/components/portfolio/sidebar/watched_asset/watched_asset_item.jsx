import React from "react";
import { Link } from "react-router-dom";

const WatchedAssetItem = ({ asset }) => {
  let pcColor
  if (asset.percentChange < 0) {
    pcColor = "pc-red";
  } else if (asset.percentChange > 0) {
    pcColor = "pc-green";
  } else {
    pcColor = "pc-grey";
  }
  return (
    <Link to={`/assets/${asset.tickerSymbol.toLowerCase()}`}>
      <li className="asset-list">
        <div>
          <span className="ticker-symbol">{asset.tickerSymbol}</span>
        </div>
        <div>
          <span className="price">${asset.price}</span>
          <span className={pcColor}>{`${asset.percentChange}%`}</span>
        </div>
      </li>
    </Link>
  );
};

export default WatchedAssetItem;
