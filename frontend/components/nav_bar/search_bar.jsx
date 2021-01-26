import React, { Component } from "react";
import { Link } from "react-router-dom";
import { assetSearch } from "../../util/search_util";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      returnAsset: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.display = this.display.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.dropDownRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  handleChange(e) {
    this.setState({ searchInput: e.target.value });
    if (e.target.value === "") {
      this.setState({ returnAsset: null });
    } else {
      assetSearch(e.target.value).then((assets) =>
        this.setState({ returnAsset: assets })
      );
    }
  }

  handleClick() {
    this.setState({ searchInput: "", returnAsset: null });
  }

  handleClickOutside(e) {
    if (this.state.returnAsset === null) return;
    if (this.dropDownRef && !this.dropDownRef.current.contains(e.target)) {
      this.setState({ returnAsset: null });
    }
  }
  
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  display() {
    let displayResult;

    if (this.state.returnAsset === null) {
      displayResult = null;
    } else if (this.state.returnAsset.length === 0) {
      displayResult = (
        <div className="search-dropdown" id="no-results">
          No matching results
        </div>
      );
    } else {
      displayResult = (
        <div className="search-dropdown">
          <ul className="matched-assets">
            {this.state.returnAsset.map((asset, idx) => (
              <Link
                to={`/assets/${asset.tickerSymbol.toLowerCase()}`}
                onClick={this.handleClick}
                key={idx}
              >
                <li className="search-result">
                  <span>{asset.tickerSymbol}</span>
                  <span>{asset.companyName}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      );
    }
    return displayResult;
  }
  render() {
    return (
      <div className="search-bar" ref={this.dropDownRef}>
        <div className="input-container">
          <img className="search-icon" src={window.images.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
        </div>
        {this.display()}
      </div>
    );
  }
}

export default SearchBar;
