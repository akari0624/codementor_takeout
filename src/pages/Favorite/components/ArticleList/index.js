import {useMemo} from 'react'
import PropTypes from 'prop-types'
import ArticleList from 'components/ArticleList'
import { useSelector } from 'react-redux'

const favoriteArticlesSelector = (state) => state?.favoriteArticles
const favoriteIdsSelector = (state) => state?.favorite

function ArticleListBind(props) {
  const favoriteArticles = useSelector(favoriteArticlesSelector)
   const favoriteIds = useSelector(favoriteIdsSelector)


  const checkedFavoriteArticles = useMemo(
    () =>
      favoriteArticles.map((a) => {
        if (favoriteIds.has(a.id)) {
          return {...a, isSaved: true}
        } else {
          return {...a, isSaved: false}
        }
      }),
    [favoriteArticles, favoriteIds]
  )

  return <ArticleList data={checkedFavoriteArticles} />
}

ArticleListBind.propTypes = {}

export default ArticleListBind
