import { handleActions } from 'redux-actions';
import { ADD_FAVORITE_ARTICLES, REMOVE_FAVORITE_ARTICLE } from 'actions/favorite_article/type'

const InitFavoriteArticleState = []


export default handleActions(
  {
    [ADD_FAVORITE_ARTICLES]: (state, { payload }) => {
      
      return [...state, payload]
    },
    // payload: articleId
    [REMOVE_FAVORITE_ARTICLE]: (state, {payload}) => {
      
      return state.filter(a => a.id !== payload)
    },
  },
  InitFavoriteArticleState
);
