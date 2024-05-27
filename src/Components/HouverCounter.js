import React, { Component } from 'react'
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
      
        <h2 onMouseOver={this.incrementCount}>Hoverd {count} Times </h2>
      
    )
  }
}

export default HouverCounter