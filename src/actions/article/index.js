import { createAction } from 'redux-actions';
import {REPLACE_ARTICLES} from './type'

export const replaceArticles = createAction(
  REPLACE_ARTICLES,
  (payload) => payload
)
