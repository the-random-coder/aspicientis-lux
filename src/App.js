import { Suspense, lazy } from 'react'
import Page from './components/Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'));
const Birds = lazy(() => import('./pages/birds/Index'));

function App() {
  return (
      <Suspense fallback={null}>
        <Router>
          <Page>
            <Switch>
              <Route path="/birds" component={Birds} />
              <Route path="/" component={Home} />
            </Switch>
          </Page>
        </Router>
      </Suspense>
  );
}

export default App;