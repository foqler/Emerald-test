import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { routerReducer } from 'react-router-redux'
import { reducer } from 'redux-form';

export default () => createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
    form: reducer,
  }),
  applyMiddleware(thunk, createLogger())
);
