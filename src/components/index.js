import React, { useContext } from 'react'
import ToDoList from './ToDoList'
import Button from './Button'
import Input from './Input'
import { ToDoContext } from '../context/ToDoContext'
const ToDo = () => {

    const {state:{todos}, addTooDoo} = useContext(ToDoContext)
    
    const todoId = todos.length

  return (
    <div className='todowrapper'>
    <div className="input" style={{display:'flex', justifyContent:'center', margin:'2rem'}}>
        <Input/>
        <Button onClick={addTooDoo} todoId={todoId}>Add</Button>
        </div>
        <ToDoList/>
        
    </div>
  )
}

export default ToDo