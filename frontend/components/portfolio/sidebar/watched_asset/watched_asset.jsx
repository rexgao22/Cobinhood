import React from "react";
import WatchedAssetItem from "./watched_asset_item";
const OwnedAsset = ({ assets }) => {
  return (
    <div className="watched-asset-container">
      <div className="header-block">
        <header className="list-header">Watch List</header>
      </div>
      <ul className="watched-asset-list">
        {assets.map((asset) => (
          <WatchedAssetItem key={asset.id} asset={asset} />
        ))}
      </ul>
      {assets.length ? null : (
        <p className="empty-list-msg">Add stock to your watch list</p>
      )}
    </div>
  );
};

export default OwnedAsset;
