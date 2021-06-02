import {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SaveButton from 'components/SaveButton'

const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid grey;
  margin-bottom: 3px;
  padding: .5rem 1rem;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: .4rem;
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
        margin-right: .5rem;
      }
    }
    .show_on_hover {
      position: absolute;
      right: 2rem;
      bottom: .8rem;
    }
  }
`

function ArticleItem({ articleData }) {
  const { id, title, author_name, categories, isSaved } = articleData
  const [showSave, setShowSave] = useState(false)
  return (
    <ItemWrapper onMouseEnter={() => {setShowSave(true)}} onMouseLeave={() => {setShowSave(false)}} >
      <div className="title">{title}</div>
      <div className="authorAndTags">
        <div className="author">{author_name}</div>
        <div className="tags">
          {categories.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        {showSave && <SaveButton className="show_on_hover" isSaved={isSaved} id={id} articleData={articleData} />}
      </div>
    </ItemWrapper>
  )
}

ArticleItem.propTypes = {}

export default ArticleItem
