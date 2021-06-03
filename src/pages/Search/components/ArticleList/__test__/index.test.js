import { renderTestedComponentWithReduxProvider } from '__test_util'
import ArticleListBind from '../index'
import {ITEM_TEST_ID} from 'components/ArticleList'
import mockArticles from '__test_util/mock_data/mockArticles'

test('it can render 3 articleItem if redux store has 3 article data', () => {
  const container = renderTestedComponentWithReduxProvider(
    ArticleListBind,
    { article: {articles: mockArticles} },
    {}
  )

  const articleItemList = container.getAllByTestId(ITEM_TEST_ID)
  expect(articleItemList.length).toBe(mockArticles.length)
})

// test('if one article isSaved is true, the article will have save state', () => {
//   const container = renderTestedComponentWithReduxProvider(
//     ArticleListBind,
//     { article: {articles: mockArticles} },
//     {}
//   )

//   const articleItemList = container.getAllByTestId(ITEM_TEST_ID)
//   expect(articleItemList.length).toBe(mockArticles.length)
// })
