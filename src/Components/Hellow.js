import React from "react";
const Hellow=()=>
    {
        // return(
        //     <div>
        //         <h1>Hellow Saahil</h1>
        //     </div>
        // )

        // Creating React Jsx 
        return React.createElement('div',
        {id:'hellow',className :'dummy class '},
        React.createElement('h1',null,'Hellow These Is Jsx'))
    }
    export default Hellow