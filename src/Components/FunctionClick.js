import React from 'react'

const FunctionClick = () => {
  function clickHandler(){
    console.log('Button Clicked')
  }
  return (
    <div>
      1<button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
