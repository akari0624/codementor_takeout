import { handleActions } from 'redux-actions';
import {REPLACE_ARTICLES} from 'actions/article/type'

const InitArticleState = {
  articles: []
}


export default handleActions(
  {
    [REPLACE_ARTICLES]: (state, { payload }) => {
      return {...state, articles: payload}
    },
  },
  InitArticleState
);
