import React from 'react'
import './Button.css'

const Button = ({text , operation}:any) => {
  return (
    <button className = 'btn' onClick={operation} >{text}</button>
  )
}

export default Button