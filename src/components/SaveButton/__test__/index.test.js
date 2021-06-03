import { renderTestedComponentWithReduxProvider } from '__test_util'
import SaveButton from '../index'
import mockArticles from '__test_util/mock_data/mockArticles'
import { fireEvent, waitFor } from '@testing-library/react'

test('it will show `Saved` text if the isSaved props is true', () => {
  const { getByText } = renderTestedComponentWithReduxProvider(
    SaveButton,
    {},
    { isSaved: true, id: mockArticles[0].id, articleData: mockArticles[0] }
  )
  const savedButton = getByText('Saved')
  expect(savedButton).toHaveTextContent('Saved')
})

test('its inner state will from false become true after click `Save` button', async () => {
  const { getByText } = renderTestedComponentWithReduxProvider(
    SaveButton,
    {},
    { isSaved: false, id: mockArticles[0].id, articleData: mockArticles[0] }
  )
  const savedButton = getByText('Save')
  fireEvent.click(savedButton)

  await waitFor(
    () => {
      expect(savedButton).toHaveTextContent('Saved')
    },
    { timeout: 2000 }
  )
})
