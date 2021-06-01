import { useState } from 'react';
import styled from 'styled-components';

const FAVORITE_SET_KEY = 'favoriteSet';

const SaveBTN = styled.span`
  padding: 2px 3px;
  border: 1px solid #000000;
  background-color: ${({ saved }) => (saved ? '#CCCBCD' : '#FFFFFF')};
  color: ${({ saved }) => (saved ? '#FFFFFF' : '#000000')};
  &:hover {
    cursor: pointer;
  }
`;

const toggleSave = (isSaved, id, set_IsSaved) => {
  if (!isSaved) {
    // do save
    const fSet = localStorage.getItem(FAVORITE_SET_KEY);
    if (!fSet) {
      const initSet = new Set();
      initSet.add(id);
      localStorage.setItem(FAVORITE_SET_KEY, JSON.stringify(initSet));
      set_IsSaved((prev) => !prev);
    } else {
      const lastSetData = JSON.parse(fSet);
      const newSet = new Set(...lastSetData, id);
      localStorage.setItem(FAVORITE_SET_KEY, JSON.stringify(newSet));
      set_IsSaved((prev) => !prev);
    }
  } else {
    // do delete from favorite
    const lastSet = localStorage.getItem(FAVORITE_SET_KEY);
    const lastSetData2 = JSON.parse(lastSet);
    const newSet2 = new Set(...lastSetData2);
    newSet2.delete(id);
    localStorage.setItem(FAVORITE_SET_KEY, JSON.stringify(newSet2));
    set_IsSaved((prev) => !prev);
  }
};

const SaveButton = ({ isSaved, id }) => {
  const [_isSaved, set_IsSaved] = useState(isSaved);

  return (
    <SaveBTN
      saved={isSaved}
      onClick={() => toggleSave(_isSaved, id, set_IsSaved)}
    >
      {_isSaved ? 'Saved' : 'Save'}
    </SaveBTN>
  );
};

export default SaveButton;
