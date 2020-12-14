import { divide } from 'lodash';
import React, { Component } from 'react';
 
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
          <div className="search-bar">
            <div className="input-container">
              <img className="search-icon" src={window.images.searchIcon} />
              <input
                type="text"
                placeholder="Search"
                onChange={this.handleChange}
              />
            </div>
          </div>
        );
    }
}
 
export default SearchBar;