import { Suspense, lazy } from 'react'
import Page from './components/Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'));
const Birds = lazy(() => import('./pages/birds/Index'));
const Landscapes = lazy(() => import('./pages/Landscapes'));
const WildLife = lazy(() => import('./pages/wildlife/Index'));

function App() {
  return (
      <Suspense fallback={null}>
        <Router>
          <Page>
            <Switch>
              <Route path="/birds" component={Birds} />
              <Route path="/wildlife" component={WildLife} />
              <Route path="/landscapes" component={Landscapes} />
              <Route path="/" component={Home} />
            </Switch>
          </Page>
        </Router>
      </Suspense>
  );
}

export default App;