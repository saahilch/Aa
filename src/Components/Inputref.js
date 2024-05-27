import React, { Component } from 'react'

 class Inputref extends Component {
    constructor(props) {
      super(props)
    this.inputref=React.createRef()
    
    }
    // Lets Craete A Function to get current focous it will automatically set cursor to main
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
