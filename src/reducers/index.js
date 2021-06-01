import { combineReducers } from 'redux';
import articlesReducer from './Articles';
import favoriteIdReducer from './FavoriteId'
import favoriteArticlesReducer from './FavoriteArticles'

const rootReducer = combineReducers({
  article: articlesReducer,
  favorite: favoriteIdReducer,
  favoriteArticles: favoriteArticlesReducer,
});

export default rootReducer;
