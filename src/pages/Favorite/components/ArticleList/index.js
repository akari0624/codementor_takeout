import { useMemo } from 'react'
import PropTypes from 'prop-types'
import ArticleList from 'components/ArticleList'
import { useSelector } from 'react-redux'

const favoriteArticlesSelector = (state) => state?.favoriteArticles

function ArticleListBind(props) {
  const favoriteArticles = useSelector(favoriteArticlesSelector)

  return <ArticleList data={favoriteArticles} />
}

ArticleListBind.propTypes = {}

export default ArticleListBind
