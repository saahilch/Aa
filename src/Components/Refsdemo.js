import React, { Component } from 'react'

 class Refsdemo extends Component {
    constructor(props) {
      super(props)
        this.inputRef=React.createRef()
       
    }

    componentDidMount(){
        // now we are focousing the cursor in text after reloding 
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
      <button onClick={this.clickHandler}>Click</button>
     </div>
    )
  }
}

export default Refsdemo
