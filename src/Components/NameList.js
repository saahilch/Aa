import React from 'react'
import Person from './Person'
function NameList() {
    const persons=[
        {
            id:1,
            name:'Sahi',
            age: 24,
            skill:'Recat Developer'
        },
        {
            id:2,
            name:'Omi',
            age:26,
            skill:'SQL Developer'
        },
        {
            id:3,
            name:'Tejas',
            age:27,
            skill:'Mern Stack Developer'
        },
        {
            id:4,
            name:'Amit',
            age:21,
            skill:'Java Developer'
        },
        {
            id:5,
            name:'Sunny',
            age :22,
            skill:'Devops Developer'
        },

    ]
    // const names=['sahil ','Bruce','clrk','dyana']
    // const nameList=names.map(name=><h2>{name}</h2>)
    // passing props here ,assign id to key unique to avoid consol error
    const personList=persons.map( person=>
        <Person key={person.id} person={person}></Person>)
        return <div>{personList}</div>
    
    
    return (<div>{personList}</div>)
}
//       {/* <h2>{names[0]}</h2>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2>
//        */}
//        {/* use map here */}
//        {/* {
//         names.map(name=><h2>{name}</h2>)
//        } */}
    
//   )

export default NameList
