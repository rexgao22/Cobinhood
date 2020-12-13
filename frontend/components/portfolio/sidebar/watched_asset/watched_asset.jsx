import React from "react";
import WatchedAssetItem from "./watched_asset_item";
const OwnedAsset = ({ assets }) => {
  return (
    <div className="watched-asset-container">
      <header>Watch List</header>
      <ul className="watch-list">
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
