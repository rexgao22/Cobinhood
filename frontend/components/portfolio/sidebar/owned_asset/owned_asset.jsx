import React from "react";
import OwnedAseetItem from "./owned_asset_item"
const OwnedAsset = ({ assets }) => {
  return (
    <div className="owned-asset-container">
      <header>Stocks</header>
      <ul className="asset-list">
        {assets.map((asset) => (
          <OwnedAseetItem key={asset.id} asset={asset} />
        ))}
      </ul>
      {assets.length ? null : (
        <p className="empty-list-msg">Time to purchase stock</p>
      )}
    </div>
  );
};

export default OwnedAsset;
