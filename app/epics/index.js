import Rx from 'rxjs/Rx';
import { combineEpics } from 'redux-observable';

import clipboardListenerEpic from './clipboardListener.epic'

const epics = [
  clipboardListenerEpic
];

export default combineEpics(...epics);
