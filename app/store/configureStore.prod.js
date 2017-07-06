// @flow
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';
import type { counterStateType } from '../reducers/counter';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware(rootEpic);

const enhancer = applyMiddleware(router, epicMiddleware);

function configureStore(initialState?: counterStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
