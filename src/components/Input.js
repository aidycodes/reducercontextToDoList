import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'

const Input = (props) => {

  const {state:{input}, dispatch} = useContext(ToDoContext)

  return (
    <input value={input} onChange={(e) => dispatch({type:'input', payload:e.target.value })}   />
  )
}

export default Input