import React from 'react'
import PropTypes from 'prop-types'

function ArticleItem({title, author, categories, isSaved}) {
  return (
    <div>
      {title}
    </div>
  )
}

ArticleItem.propTypes = {

}

export default ArticleItem

