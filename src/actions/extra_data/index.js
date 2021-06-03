import { createAction } from 'redux-actions';
import {KEEP_SEARCH_KEYWORD} from './type'

export const keepSearchKeyword = createAction(
  KEEP_SEARCH_KEYWORD,
  (payload_keyword) => payload_keyword
)
