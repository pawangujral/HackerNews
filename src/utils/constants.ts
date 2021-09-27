import { ErrorType } from './types';

// ENDPOINTS
export const NEWS_API_ENDPOINT_BASE: string =
  'https://hacker-news.firebaseio.com/v0';
export const NEWS_API_ENDPOINT_TOP_STORIES: string = `${NEWS_API_ENDPOINT_BASE}/topstories.json?print=pretty`;

// DEFAULT MESSAGES
export const ERROR_DEFAULT_MESSAGE: string = 'Something went wrong! Try again';
export const ERROR_NO_COLLECTION: string =
  "Oops! we can't find any news for you at this time.";

export const ERROR_DEFAULT_STATE: ErrorType = {
  msge: ERROR_DEFAULT_MESSAGE,
  status: false,
};
