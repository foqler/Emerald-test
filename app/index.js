import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './src/App';
import { MainContainer } from './src/Main';
import { SignInFormContainer } from './src/SignInForm';
import createStore from './createStore';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = createStore();

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SignInFormContainer}/>
        <Route path="main" component={MainContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
