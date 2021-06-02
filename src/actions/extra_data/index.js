import { createAction } from 'redux-actions';

export const keepSearchKeyword = createAction(
  'KEEP_SEARCH_KEYWORD',
  (payload_keyword) => payload_keyword
)
