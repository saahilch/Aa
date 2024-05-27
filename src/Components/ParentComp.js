import React, { Component } from 'react'
import RegularComp from './RegularComp'
 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sahil'
      }
    }
    componentDidMount(){
        setInterval(()=>{this.setState({
            name:'Sahil'
        })},2000)
        
    }
    
  render() {
    console.log('****************ParentCompo')
    return (
      <div>
        ParentComponent
        <RegularComp name={this.state.name}/>
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
