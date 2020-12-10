import React, { Component } from 'react';
 
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <input type="text" placeholder="Search" onChange={this.handleChange}/>
            </div>
        );
    }
}
 
export default SearchBar;