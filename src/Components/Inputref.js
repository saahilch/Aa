import React, { Component } from 'react'

 class Inputref extends Component {
    constructor(props) {
      super(props)
    this.inputref=React.createRef()
    
    }
    focousIntput(){
        this.inputref.current.focus()
    }
  render() {
    return (
      <div>
        <input type ="text" ref={this.inputref}></input>
      </div>
    )
  }
}

export default Inputref
