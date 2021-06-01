import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const LayoutWrapper = styled.main`
  width: 100vw;
  height: fill-available;
`

export default function SearchAndFavoriteTabLayout({ children }) {
  const history = useHistory()

  const RedirectButtons = [
    {
      url: '/search',
      name: 'Search',
    },
    {
      url: '/favorite',
      name: 'Favorite',
    },
  ]

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <LayoutWrapper>
      <div>
        <div>
          {RedirectButtons.map(({ url, name }) => (
            <button
              key={name}
              type="button"
              onClick={() => {
                handleClick(url)
              }}
            >
              {name}
            </button>
          ))}
        </div>
        {children}
      </div>
    </LayoutWrapper>
  )
}
