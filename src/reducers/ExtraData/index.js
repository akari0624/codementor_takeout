import { handleActions } from 'redux-actions';

const InitExtraData = {
  searchKeyword: ''
}


export default handleActions(
  {
    KEEP_SEARCH_KEYWORD: (state, { payload }) => {
      
      return {...state, searchKeyword: payload}
    },
  },
  InitExtraData
);
