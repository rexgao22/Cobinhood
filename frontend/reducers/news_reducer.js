import { RECEIVE_NEWS} from '../actions/news_action';

function getEnglishNew(news){
    const englishNew =[];
    news.forEach((stockNew) =>{
        if(stockNew.lang === 'en'){
            englishNew.push(stockNew);
        }
    });
    return englishNew;
}

const newsReducer = (oldState = [], action) =>{
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_NEWS:
            const engNews = getEnglishNew(action.news);
            return engNews.map(({ datatime, headline, summary, image, source, url }) => ({
              datatime,
              headline,
              summary,
              image,
              source,
              url,
            }));
        default:
            return oldState;
    }
}

export default newsReducer;