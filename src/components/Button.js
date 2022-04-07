import React from 'react'

const Button = (props) => {
    console.log(props.todoId)
  return (
    <button className="button" onClick={() => props.onClick(props.todoId)}>{props.children}</button>
  )
}

export default Button
