import React from 'react'
import PropTypes from 'prop-types'
import ArticleList from 'components/ArticleList'
import {useSelector} from 'react-redux'

const articlesSelector = state => state?.article?.articles

function ArticleListBind(props) {
  const artiles = useSelector(articlesSelector)
  return (
    <ArticleList data={artiles} />
  )
}

ArticleListBind.propTypes = {

}

export default ArticleListBind

