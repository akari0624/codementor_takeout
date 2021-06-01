import React from 'react'
import PropTypes from 'prop-types'
import ArtileItem from 'components/ArticleItem'

function ArticleList({ data }) {
  return (
    <div>
      {data.map((d) => (
        <ArtileItem key={d.id} articleData={d} />
      ))}
    </div>
  )
}

ArticleList.propTypes = {}

export default ArticleList
