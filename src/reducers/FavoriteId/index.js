import { handleActions } from 'redux-actions';

const FAVORITE_SET_KEY = 'favoriteSet';

const getInitialFavoriteIdState = () => {
  const fSet = window.localStorage.getItem(FAVORITE_SET_KEY);
  let initialState;
  if (!fSet) {
    initialState = new Set();
  } else {
    const lastSetData = JSON.parse(fSet);
    initialState = new Set([...lastSetData]);
  }
  return initialState;
};

const InitFavoriteIdsState = getInitialFavoriteIdState()

export default handleActions(
  {
    ADD_FAVORITE: (state, { payload }) => {
      console.log('state', state)
      const _newSet = new Set([...state])
      _newSet.add(payload)
      return _newSet
    },
    DELETE_FAVORITE: (state, { payload }) => {
      const _newSet = new Set([...state])
      _newSet.delete(payload)
      return _newSet
    },
    ON_PAGE_DISMISS: (state) => {
      window.localStorage.setItem(FAVORITE_SET_KEY, JSON.stringify([...state]));
    },
  },
  InitFavoriteIdsState
);
