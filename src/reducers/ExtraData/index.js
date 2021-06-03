import { handleActions } from 'redux-actions';
import {KEEP_SEARCH_KEYWORD} from 'actions/extra_data/type'

const InitExtraData = {
  searchKeyword: ''
}


export default handleActions(
  {
    [KEEP_SEARCH_KEYWORD]: (state, { payload }) => {
      
      return {...state, searchKeyword: payload}
    },
  },
  InitExtraData
);
