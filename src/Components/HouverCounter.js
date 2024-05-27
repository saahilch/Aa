import React, { Component } from 'react'
import UpdatedComonent from './withCounter'
//When Mouse Points to the word it automatically increments
 class HouverCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          count : 0
           
        }
      }
      incrementCount =()=>{
          this.setState(prevState=>{
              return { count: prevState.count + 1 }
          })
      }
  render() {
    const {count}=this.state
    return (
      <button onClick={this.incrementCount}>{this.props.name}Clicked{count}thims`</button>
        
      
    )
  }
}

export default UpdatedComonent( HouverCounter)
