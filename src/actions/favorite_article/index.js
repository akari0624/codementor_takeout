import { createAction } from 'redux-actions';

export const addFavoriteArticle = createAction(
  'ADD_FAVORITE_ARTICLES',
  (payload_articleData) => payload_articleData
)

export const removeFavoriteArticle = createAction(
  'REMOVE_FAVORITE_ARTICLE',
  (payload_articleId) => payload_articleId
)
