import React, {Component} from 'react';
import AssetNews from './asset_new';
import AssetGraph from './asset_graph';
import CompanyInfo from './company_info'
import AssetSideBarContainer from './asset_sidebar/asset_sidebar_container'
import {fetchDailyGraphData} from '../../util/asset_util';
import { fetchAsset} from '../../util/asset_util'

class AssetShow extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            assetId: "",
            tickerSymbol: "",
            companyName: "",
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
              tickerSymbol: asset.tickerSymbol,
              companyName: asset.companyName,
            })
          )
          .then(() => fetchDailyGraphData(this.state.tickerSymbol))
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

    // componentDidUpdate(prevProps) {
    //     fetchAsset(this.props.match.params.tickerSymbol.toUpperCase())
    //       .then((asset) =>
    //         this.setState({
    //           assetId: asset.id,
    //           tickerSymbol: asset.tickerSymbol,
    //           companyName: asset.companyName,
    //         })
    //       )
    //       .then(() => fetchDailyGraphData(this.state.tickerSymbol))
    //       .then((data) => {
    //         let i = data.length - 1;
    //         while (!data[i].average) {
    //           i--;
    //         }
    //         const endOfDayPrice = data[i].average;
    //         let j = 0;
    //         while (!data[j].average) {
    //           j++;
    //         }
    //         const startOfDayPrice = data[j].average;
    //         this.setState({
    //           price: endOfDayPrice,
    //           percentChange: (endOfDayPrice / startOfDayPrice - 1) * 100,
    //           portValueChange: endOfDayPrice - startOfDayPrice,
    //         });
    //       });
    // }

    assetSidebarDisplay(){
        if(this.state.price){
            return <AssetSideBarContainer
              asset={{
                id: this.state.assetId,
                tickerSymbol: this.state.tickerSymbol,
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
            <div className="asset-show">
              <div className="asset-show-left">
                <AssetGraph
                  tickerSymbol={this.props.match.params.tickerSymbol}
                  companyName={this.state.companyName}
                  price={this.state.price}
                  percentChange={this.state.percentChange}
                  portValueChange={this.state.portValueChange}
                />
                <CompanyInfo
                  tickerSymbol={this.props.match.params.tickerSymbol}
                />
                <AssetNews
                  tickerSymbol={this.props.match.params.tickerSymbol}
                />
              </div>
              {this.assetSidebarDisplay()}
            </div>
          </div>
        );
    }
}
 
export default AssetShow;