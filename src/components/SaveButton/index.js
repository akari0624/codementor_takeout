import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addFavorite, deleteFavorite } from 'actions/favoriteId'
import {
  addFavoriteArticle,
  removeFavoriteArticle,
} from 'actions/favorite_article'

const SaveBTN = styled.span`
  padding: 2px 3px;
  border: 1px solid #000000;
  background-color: ${({ saved }) => (saved ? '#CCCBCD' : '#FFFFFF')};
  color: ${({ saved }) => (saved ? '#FFFFFF' : '#000000')};
  &:hover {
    cursor: pointer;
  }
`

const toggleSave = (isSaved, id, set_IsSaved, dispatch, articleData) => {
  if (!isSaved) {
    // do save
    dispatch(addFavorite(id))
    dispatch(addFavoriteArticle(articleData))
    set_IsSaved((prev) => !prev)
  } else {
    // do delete from favorite
    dispatch(deleteFavorite(id))
    dispatch(removeFavoriteArticle(id))
    set_IsSaved((prev) => !prev)
  }
}

export const SaveBTN_testId = 'saveBTN_id'

const SaveButton = ({ isSaved, id, articleData, ...rest }) => {
  const [_isSaved, set_IsSaved] = useState(isSaved)

  const dispatch = useDispatch()
  return (
    <SaveBTN
      data-testid={SaveBTN_testId}
      {...rest}
      saved={_isSaved}
      onClick={() =>
        toggleSave(_isSaved, id, set_IsSaved, dispatch, articleData)
      }
    >
      {_isSaved ? 'Saved' : 'Save'}
    </SaveBTN>
  )
}

export default SaveButton
