import React from 'react';
import News from '../portfolio/news/news';
import AssetGraph from './asset_graph';
import AssetSideBarContainer from './asset_sidebar_container'
import {fetchDailyGraphData} from '../../util/external_util';
import { fetchAsset} from '../../util/asset_util'
import {userRouterMatch} from 'react-router-dom';
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

    }

    componentDidMount() {
        const match = useRouterMatch('/assets/:tickerSymbol')
        fetchAsset(match.params.tickerSymbol.toUpperCase())
        .then((asset) => this.setState({
            assetId: asset.id,
            ticker: asset.tickerSymbol,
            name: asset.companyName,
        }))
        .then(() => fetchDailyGraphData(this.state.ticker))
        .then((data)=>{
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
          percentChange: ((endOfDayPrice / startOfDayPrice) - 1) * 100,
          portValueChange: endOfDayPrice - startOfDayPrice
        });
        })
    }

    componentDidUpdate(prevProps) {
        const match = useRouterMatch('/assets/:tickerSymbol')
        fetchAsset(match.params.tickerSymbol.toUpperCase())
        .then((asset) => this.setState({
            assetId: asset.id,
            ticker: asset.tickerSymbol,
            name: asset.companyName,
        }))
        .then(() => fetchOneDayGraphData(this.state.ticker))
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
            percentChange: ((endOfDayPrice / startOfDayPrice) - 1) * 100,
            portValueChange: endOfDayPrice - startOfDayPrice
          });
        });
    }

    assetSidebarDisplay(){
        if(this.state.price){
            <AssetSideBarContainer />
        }else{
            return null;
        }
    }
    render() { 
        return (  
            <div>

            </div>
        );
    }
}
 
export default AssetShow;