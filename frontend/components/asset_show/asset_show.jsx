import React, {Component} from 'react';
import News from '../portfolio/news/news';
import AssetGraph from './asset_graph';
import AssetSideBarContainer from './asset_sidebar/asset_sidebar_container'
import {fetchDailyGraphData} from '../../util/external_util';
import { fetchAsset} from '../../util/asset_util'
class AssetShow extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            assetId: "",
            ticker: "",
            name: "",
            price: "",
            percentChange: "",
            portValueChange: "",
        }
      this.assetSidebarDisplay = this.assetSidebarDisplay.bind(this)
    }

    componentDidMount() {
        fetchAsset(this.props.match.params.tickerSymbol.toUpperCase())
          .then((asset) =>
            this.setState({
              assetId: asset.id,
              ticker: asset.tickerSymbol,
              name: asset.companyName,
            })
          )
          .then(() => fetchDailyGraphData(this.state.ticker))
          .then((data) => {
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
            this.setState({
              price: endOfDayPrice,
              percentChange: (endOfDayPrice / startOfDayPrice - 1) * 100,
              portValueChange: endOfDayPrice - startOfDayPrice,
            });
          });
    }

    componentDidUpdate(prevProps) {
        fetchAsset(this.props.match.params.tickerSymbol.toUpperCase())
          .then((asset) =>
            this.setState({
              assetId: asset.id,
              ticker: asset.tickerSymbol,
              name: asset.companyName,
            })
          )
          .then(() => fetchDailyGraphData(this.state.ticker))
          .then((data) => {
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
            this.setState({
              price: endOfDayPrice,
              percentChange: (endOfDayPrice / startOfDayPrice - 1) * 100,
              portValueChange: endOfDayPrice - startOfDayPrice,
            });
          });
    }

    assetSidebarDisplay(){
        if(this.state.price){
            <AssetSideBarContainer
              asset={{
                id: this.state.assetId,
                ticker: this.state.ticker,
                price: this.state.price,
                percentChange: this.state.percentChange,
              }}
            />;
        }else{
            return null;
        }
    }
    render() { 
        return (
          <div>
            <div>
              <div></div>
              {this.assetSidebarDisplay()}
            </div>
          </div>
        );
    }
}
 
export default AssetShow;