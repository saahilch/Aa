import React, { Component } from 'react'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sahil'
      }
      console.log('LifeCycleA constructure')
    }
    static getDeriveStateFromProps(prop,state){
        console.log('LifeCycleA getDerivedStateProps')
        return null
    }
    componentDidMount(){
        
    }
  render() 
  
    {
        console.log('LifeCycleA render')
    return (
      <div>
        
      </div>
    )
  }
}

export default LifecycleA
