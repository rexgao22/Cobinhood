import React, { Component } from 'react';
import NewsIndex from './news_index'
class News extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if(this.props.stories.length === 0){
            this.props.requestNews();
        }
    }
    render() { 
        return (
            <div className="news"> 
                <h2>News</h2>
                <ul>
                {this.props.stories.map((story,idx)=>(
                    <NewsIndex story ={story} key={idx}/>
                ))}  
                </ul>
            </div>
        );
    }
}
 
export default News;