import React from "react";
 const UpdatedComonent=(OriginalComponent)=>{
    class NewComponent extends React.Component{
        render(){
            return  <OriginalComponent name='Sahil'/>
        }
    }
    return NewComponent
 }
 export default UpdatedComonent