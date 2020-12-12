import { fetchNews } from "../util/external_util";

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = (news) => ({
  type: RECEIVE_NEWS,
  news,
});

export const requestNews = (amount) => (dispatch) =>
  fetchNews(amount).then((news) => dispatch(receiveNews(news)));
