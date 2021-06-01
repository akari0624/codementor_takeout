import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SaveButton from 'components/SaveButton'

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  margin-bottom: 3px;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .authorAndTags {
    display: flex;
    .author {
      margin-right: 1rem;
    }
    .tags {
      span {
        background-color: #efeeef;
        padding: 2px 3px;
      }
    }
  }
`

function ArticleItem({ articleData }) {
  const { id, title, author, categories, isSaved } = articleData

  return (
    <ItemWrapper>
      <div className="title">{title}</div>
      <div className="authorAndTags">
        <div className="author">{author}</div>
        <div className="tags">
          {categories.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <SaveButton isSaved={isSaved} id={id} articleData={articleData} />
      </div>
    </ItemWrapper>
  )
}

ArticleItem.propTypes = {}

export default ArticleItem
