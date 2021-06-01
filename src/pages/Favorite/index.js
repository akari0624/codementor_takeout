import PropTypes from 'prop-types'
import FavoriteArticleList from './components/ArticleList'
import SearchAndFavoriteTabLayout from 'layout/search_and_favorite'

function Favorite(props) {
  return (
    <SearchAndFavoriteTabLayout>
      <FavoriteArticleList />
    </SearchAndFavoriteTabLayout>
  )
}

Favorite.propTypes = {

}

export default Favorite

