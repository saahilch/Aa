import React, { Component } from 'react'

 class UserGretting extends Component 
 {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn:true
      }
    } 
    
  render() {
    return this.state.isLogedIn && <div>welcome sahil</div>
    // return this.state.isLogedIn ? (
    //     <div>welcome sahil</div>
    // ):(
    //     <div>welcome Guest</div>
    // )
    
    // if(this.state.isLogedIn){
    //     return(
    //         <div>Welcome Sahil</div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest..</div>
    //     )

    // let messgae 
    // if(this.state.isLogedIn){
    //     messgae =<div>Welcome Sahil</div>
    // }else{
    //     messgae=<div>welcome Guest</div>
    // }
    // return <div> {messgae}</div>
    // }
   
    
    // return (
    //   <div>
    //   <div>Welcome Sahil</div>
    //   <div>Welcome Sahil</div>  
    //   </div>
    // )
  
 }
 }
export default UserGretting
