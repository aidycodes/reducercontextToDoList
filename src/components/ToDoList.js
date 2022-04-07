import React, { useContext } from 'react'
import Item from './Item'
import Button from './Button'
import { ToDoContext } from '../context/ToDoContext'

const ToDoList = () => {

    const {state:{todos}, toggleTooDoo, deleteToDo} = useContext(ToDoContext)

  return (
    <div className="todolist">
        {todos.map((todo, i) => (
          <div  key={i} style={{display:'flex', justifyContent:'center'}}>
            <Item onClick={toggleTooDoo} todoId={todo.id} completed={todo.completed}>{todo.name}</Item>
            <Button onClick={deleteToDo} todoId={todo.id} >X</Button>
          </div>
        ))}
    </div>
  )
}

export default ToDoList