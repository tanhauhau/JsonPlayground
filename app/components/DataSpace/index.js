import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { JsonClipboardListener } from '../Clipboard'
import { DataSpaceActions } from './reducer'

class DataSpace extends React.Component {
  render () {
    const { dataSpace } = this.props
    console.log(dataSpace)
    return (
      <div className={''} style={{width: '100%'}}>
        <span>{ dataSpace.length }</span>
        {_.map(dataSpace, (space) => (
          <div key={space.name}>{ space.name } - { space.value }</div>
        ))}
        <JsonClipboardListener
          onValueChanged={(value) => this.props.pushData('var' + dataSpace.length, value)} />
      </div>
    )
  }
}
export default connect(
  state => ({
    dataSpace: state.dataSpace
  }),
  dispatch => ({
    pushData: (name, value) => dispatch(DataSpaceActions.pushData(name, value))
  })
)(DataSpace)
