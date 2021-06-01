import { useMemo } from 'react'
import PropTypes from 'prop-types'
import ArticleList from 'components/ArticleList'
import { useSelector } from 'react-redux'

const articlesSelector = (state) => state?.article?.articles
const favoriteIdsSelector = (state) => state?.favorite

function ArticleListBind(props) {
  const artiles = useSelector(articlesSelector)
  const favoriteIds = useSelector(favoriteIdsSelector)

  const checkedArticles = useMemo(
    () =>
      artiles.map((a) => {
        if (favoriteIds.has(a.id)) {
          a.isSaved = true
        } else {
          a.isSaved = false
        }
        return a
      }),
    [artiles, favoriteIds]
  )
  console.log(favoriteIds)
  console.log('rerender on article list')

  return <ArticleList data={checkedArticles} />
}

ArticleListBind.propTypes = {}

export default ArticleListBind
