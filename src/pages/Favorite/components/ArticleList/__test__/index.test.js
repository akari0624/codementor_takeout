import { renderTestedComponentWithReduxProvider } from '__test_util'
import ArticleListBind from '../index'
import { ITEM_TEST_ID } from 'components/ArticleList'
import mockArticles from '__test_util/mock_data/mockArticles'
import { fireEvent, waitFor } from '@testing-library/react'

test('it can render 3 articleItem if redux store has 3 favorite_article data', () => {
  const container = renderTestedComponentWithReduxProvider(
    ArticleListBind,
    { favoriteArticles: mockArticles, favorite: new Set([801, 1624, 675]) },
    {}
  )

  const articleItemList = container.getAllByTestId(ITEM_TEST_ID)
  expect(articleItemList.length).toBe(mockArticles.length)
})

test('when mouse hover, the save button will show', async () => {
  const container = renderTestedComponentWithReduxProvider(
    ArticleListBind,
    { favoriteArticles: mockArticles, favorite: new Set([801, 1624, 675]) },
    {}
  )
  const articleItemList = container.getAllByTestId(ITEM_TEST_ID)
  fireEvent.mouseOver(articleItemList[0])

  await waitFor(
    () => {
      expect(articleItemList[0]).toHaveTextContent('Saved')
    },
    { timeout: 2000 }
  )
})

// test('after click the Saved button, the Article become unsaved and its ArticleItem will dismiss', async () => {
//   const container = renderTestedComponentWithReduxProvider(
//     ArticleListBind,
//     { favoriteArticles: mockArticles, favorite: new Set([801, 1624, 675]) },
//     {}
//   )
//   const articleItemList = container.getAllByTestId(ITEM_TEST_ID)
//   fireEvent.mouseOver(articleItemList[0])

//   await waitFor(
//     () => {
//       const savedBTN = container.getAllByText('Saved')
//       fireEvent.click(savedBTN[0])

//       const changedFavoriteArticleList = container.getAllByTestId(ITEM_TEST_ID)
//       expect(changedFavoriteArticleList).toBe(2)
//     },
//     { timeout: 4000 }
//   )
// })
