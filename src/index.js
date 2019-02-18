import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/home'));
const About = lazy(() => import('./components/about'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>loading...</h1>}>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/about' render={() => <About />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
