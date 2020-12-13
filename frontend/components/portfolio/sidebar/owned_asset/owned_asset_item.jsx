import React from "react";
import { Link } from "react-router-dom";

const OwnedAssetItem = ({ asset }) => {
  let percentChangeMsgColor
  if (asset.percentChange < 0) {
    percentChangeMsgColor = "pc-red";
  } else if (asset.percentChange > 0) {
    percentChangeMsgColor = "pc-green";
  } else {
    percentChangeMsgColor = "pc-black";
  }
  return (
    <Link to={`/assets/${asset.tickerSymbol.toLowerCase()}`}>
      <li>
        <div>
          <span>{asset.tickerSymbol}</span>
          <span>{`${asset.amount}`} shares</span>
        </div>
        <div>
          <span>${asset.price}</span>
          <span>{`${Number(asset.percentChange).toFixed(2)}%`}</span>
        </div>
      </li>
    </Link>
  );
};

export default OwnedAssetItem;
