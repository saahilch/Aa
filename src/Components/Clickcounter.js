import React, { Component } from 'react'
import UpdatedComonent from './withCounter'
// to on click button count increments by 1
class Clickcounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0

    }
  }
  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>

        <button onClick={this.incrementCount}>Click {count} Times</button>

      </div>
    )
  }
}

export default UpdatedComonent(Clickcounter)
