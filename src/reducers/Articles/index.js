import { handleActions } from 'redux-actions';

const InitArticleState = {
  articles: []
}


export default handleActions(
  {
    REPLACE_ARTICLES: (state, { payload }) => {
      console.log('new payload', payload)
      return {...state, articles: payload}
    },
  },
  InitArticleState
);
