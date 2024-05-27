import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

 class ComponentD extends Component {
  render() {
    return (
      
        <UserConsumer>
            {
                (UserName)=>{
                    return<div>Hellow</div>
                }
            }
        </UserConsumer>
     
    )
  }
}

export default ComponentD
