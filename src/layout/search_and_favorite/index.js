import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const LayoutWrapper = styled.main`
  width: 100vw;
  height: fill-available;
`

const TabsBackground = styled.div`
  background-color: #efeeef;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: flex-end;
`

const HighlightTab = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 0.5rem 1.2rem;
  border: none;
`

const NotHighlightTab = styled.button`
  background-color: #efeeef;
  color: #a9a8a9;
  padding: 0.5rem 1.2rem;
  border: none;
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
  console.log('11', history?.location?.pathname)
  return (
    <LayoutWrapper>
      <TabsBackground>
        {RedirectButtons.map(({ url, name }, idx) => (
          history?.location?.pathname === url || (history?.location?.pathname === '/' && idx === 0) ? (
            <HighlightTab
              key={name}
              type="button"
              onClick={() => {
                handleClick(url)
              }}
            >
              {name}
            </HighlightTab>
          ) : (
            <NotHighlightTab
              key={name}
              type="button"
              onClick={() => {
                handleClick(url)
              }}
            >
              {name}
            </NotHighlightTab>
          )
        ))}
      </TabsBackground>
      {children}
    </LayoutWrapper>
  )
}
