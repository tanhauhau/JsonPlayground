// @flow

import React from 'react';
import Rx from 'rxjs';
import { connect } from 'react-redux';
import { clipboard } from 'electron';

type ClipboardListenerProps = {
  disabled?: boolean,
  onValueChanged?: (string) => void
};
class ClipboardListener extends React.Component {
  props: ClipboardListenerProps;
  subscription: ?Rx.Subscription;

  componentWillMount () {
    this.stopListenClipbaordChange();
    if (this.props.disabled !== true) {
      this.listenClipboardChange();
    }
  }

  componentWillUnmount () {
    this.stopListenClipbaordChange();
  }

  componentWillReceiveProps (nextProps: ClipboardListenerProps) {
    if (this.props.disabled !== nextProps.disabled) {
      if (nextProps.disabled !== true) {
        this.listenClipboardChange();
      } else {
        this.stopListenClipbaordChange();
      }
    }
  }

  listenClipboardChange () {
    this.subscription = Rx.Observable.interval(1000)
      .map(() => clipboard.readText())
      .distinctUntilChanged()
      .subscribe((value) => this.props.onValueChanged && this.props.onValueChanged(value));
  }

  stopListenClipbaordChange () {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  render () {
    return null
  }
}

export default ClipboardListener
