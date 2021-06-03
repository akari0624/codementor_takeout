import { createAction } from 'redux-actions'
import { ADD_FAVORITE_ARTICLES, REMOVE_FAVORITE_ARTICLE } from './type'

export const addFavoriteArticle = createAction(
  ADD_FAVORITE_ARTICLES,
  (payload_articleData) => payload_articleData
)

export const removeFavoriteArticle = createAction(
  REMOVE_FAVORITE_ARTICLE,
  (payload_articleId) => payload_articleId
)
