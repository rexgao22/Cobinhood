import React from "react";
import { fetchCompanyNews } from "../../util/external_util";
import NewsIndex from "../portfolio/news/news_index"

class AssetNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {
    fetchCompanyNews(this.props.tickerSymbol).then((news)=>this.setState({ news}));
  }

  componentDidUpdate(prevProps) {
    if (this.props.tickerSymbol !== prevProps.tickerSymbol) {
      fetchCompanyNews(this.props.tickerSymbol).then((news) =>
        this.setState({ news })
      );
    }
  }

  render() {
    return (
      <div className="news">
        <h2>News</h2>
        <ul>
          {this.state.news.map((story, idx) => (
            <NewsIndex story={story} key={idx} />
          ))}
        </ul>
      </div>
    );
  }
}

export default AssetNews;