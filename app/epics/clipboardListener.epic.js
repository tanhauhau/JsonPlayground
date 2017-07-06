import { clipboard } from 'electron';
import Rx from 'rxjs/Rx';

export default action$ =>
  action$.ofType('PING')
    .mergeMap(() =>
      Rx.Observable.interval(1000)
      .takeUntil(action$.ofType('PONG'))
      .map(() => clipboard.readText())
      .distinctUntilChanged()
      .map((value) => ({ type: 'CLIPBOARD', value }))
    );
