import React from 'react'
import '../styles/button.css'

const Button = ({text, increment, onClickFunction}, props ) => {
  console.log(props.text)

  const handleClick = () =>{
    onClickFunction(increment)
  }
 
  return <button className="button" onClick={handleClick}>{text} + {increment}</button>
}

export default Button