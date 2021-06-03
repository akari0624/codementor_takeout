import { useMemo } from 'react'
import PropTypes from 'prop-types'
import ArticleList from 'components/ArticleList'
import { useSelector } from 'react-redux'

const articlesSelector = (state) => state?.article?.articles
const favoriteIdsSelector = (state) => state?.favorite

function ArticleListBind(props) {
  const articles = useSelector(articlesSelector)
  const favoriteIds = useSelector(favoriteIdsSelector)

  const checkedArticles = useMemo(
    () =>
      articles.map((a) => {
        if (favoriteIds.has(a.id)) {
          return {...a, isSaved: true}
        } else {
          return {...a, isSaved: false}
        }
      }),
    [articles, favoriteIds]
  )

  return <ArticleList data={checkedArticles} />
}

ArticleListBind.propTypes = {}

export default ArticleListBind
