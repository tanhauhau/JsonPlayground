// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import { DataSpaceReducer } from '../components/DataSpace/reducer';

const rootReducer = combineReducers({
  counter,
  router,
  dataSpace: DataSpaceReducer
});

export default rootReducer;
