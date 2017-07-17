// @flow
import React from 'react'

import ClipboardListener from '../ClipboardListener'

type ClipboardListenerProps = {
  disabled?: boolean,
  onValueChanged?: (Object) => void
};
class JsonClipboardListener extends React.Component {
  onValueChanged (value: string) {
    try {
      if (this.props.onValueChanged) {
        this.props.onValueChanged(JSON.parse(value));
      }
    } catch (e) {}
  }

  render () {
    return <ClipboardListener
      disabled={this.props.disabled}
      onValueChanged={value => this.onValueChanged(value)}
    />
  }
}
export default JsonClipboardListener
