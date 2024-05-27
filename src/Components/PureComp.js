// 
import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.log('************pure Component**********')
    return (
      <div >
       PureComponent name {this.state.name}
      </div>
    )
  }
}
