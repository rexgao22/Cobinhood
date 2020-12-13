import React from 'react';
import WatchedAssetContainer from './watched_asset/watched_asset_container';
import OwnedAssetContainer from './owned_asset/owned_asset_container';

const Sidebar = (props) => {
    return(
        <div className="portfolio-sidebar">
            <OwnedAssetContainer />
            <WatchedAssetContainer />
        </div>
    )
}

export default Sidebar;