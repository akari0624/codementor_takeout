import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onPageDismiss } from 'actions/favoriteId'
import './App.css'

const SearchPage = lazy(() => import('pages/Search'))
const FavoritePage = lazy(() => import('pages/Favorite'))

const FallbackComp = () => <div>loading...</div>

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    window.addEventListener('beforeunload', (evt) => {
      // dispatch(onPageDismiss())
    })
  }, [])
  return (
    <Suspense fallback={FallbackComp}>
      <BrowserRouter basename="">
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/favorite" component={FavoritePage} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
