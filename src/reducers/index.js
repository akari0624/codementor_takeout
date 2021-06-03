import { combineReducers } from 'redux';
import articlesReducer from './Article';
import favoriteIdReducer from './FavoriteId'
import favoriteArticlesReducer from './FavoriteArticles'
import extraDataReducer from './ExtraData'

const rootReducer = combineReducers({
  article: articlesReducer,
  favorite: favoriteIdReducer,
  favoriteArticles: favoriteArticlesReducer,
  extraData: extraDataReducer,
});

export default rootReducer;
