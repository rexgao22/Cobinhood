import { fetchNews } from "../util/external_util";

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = (news) => ({
  type: RECEIVE_NEWS,
  news,
});

export const requestNews = () => (dispatch) =>
  fetchNews().then((news) => dispatch(receiveNews(news)));
