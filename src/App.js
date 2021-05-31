import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const SearchPage = lazy(() => import('pages/Search'));
const FavoritePage = lazy(() => import('pages/Favorite'));

const FallbackComp = () => <div>loading...</div>

function App() {
  return (
    <Suspense fallback={FallbackComp}>
      <BrowserRouter basename="repo_base_name">
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/favorite" component={FavoritePage} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
