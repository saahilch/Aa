import React, { Component } from 'react'

 class ErrorBoundry extends Component {
    static getDerivedStateFromError(error){
        return {
            hasError:true

        }
    }
    componentDidCatch(error,info){
        console.log(error)
    }
  render() {
   
      if(this.state.hasError){
        return <h1>Something Went Wrong</h1>
      }
      return this.props.children
  }
}

export default ErrorBoundry
