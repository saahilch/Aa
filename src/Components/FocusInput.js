// When buttun clicks cursor will focoues in text box....
// dont do spelling mistake
import React, { Component } from 'react'
import Inputref from './Inputref'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
        this.componentRef=React.createRef()
    }
   
    clickHandler=()=>{
        this.componentRef.current.focousIntput()
    }
  render() {
    return (
      <div>
        <Inputref ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
