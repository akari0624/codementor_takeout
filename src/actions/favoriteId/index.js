import { createAction } from 'redux-actions';

export const addFavorite = createAction('ADD_FAVORITE', (payload) => payload)

export const deleteFavorite = createAction(
  'DELETE_FAVORITE',
  (payload) => payload
)

export const onPageDismiss = createAction(
  'ON_PAGE_DISMISS',
  (payload) => payload
)
