import { RECEIVE_NEWS} from '../actions/news_action';

const newsReducer = (oldState = [], action) =>{
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_NEWS:
            return action.news.map(
              ({ publishedDate, title, image, site, url }) => ({
                publishedDate,
                title,
                image,
                site,
                url,
              })
            );
        default:
            return oldState;
    }
}

export default newsReducer;