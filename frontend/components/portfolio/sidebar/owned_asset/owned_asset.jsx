import React from "react";
import OwnedAseetItem from "./owned_asset_item"
const OwnedAsset = ({ assets }) => {
  return (
    <div className="owned-asset-container">
      <div className="header-block">
        <header className="list-header">Stocks</header>
      </div>
      <ul className="owned-asset-list">
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
