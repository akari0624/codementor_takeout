import { combineReducers } from 'redux';
import articlesReducer from './Articles';

const rootReducer = combineReducers({
  article: articlesReducer
});

export default rootReducer;
