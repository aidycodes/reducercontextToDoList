import React, { createContext, useReducer } from 'react'


const reducer = (state , action) => {
    
    switch(action.type) {
    case 'input' : 
        return {...state, input:action.payload} 
    case 'add_todo' :
        return {...state, todos:[...state.todos, {name:action.payload.input,id:action.payload.id, completed:false}]}  
    case 'toggle' :
        return {...state, todos:action.payload}
    case 'delete':
        return {...state, todos:action.payload}      
        default: return state
    }
}

const init = {todos:[],input:''}


export const ToDoContext = createContext(init)

export const ToDoProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, init)

    const addTooDoo = (id) => {
        dispatch({type:'add_todo', payload:{input:state.input, id:id}})
    }
    const toggleTooDoo = (id) => {
       
    const updatedTodo = state.todos.map(todo => (
            id === todo.id ?  {...todo, completed:!todo.completed} : todo
    ))
       
        dispatch({type:'toggle', payload:updatedTodo})
    }

    const deleteToDo = (id) => {
        console.log(id,'id')
        const deletedTodo = state.todos.filter(todo => (
            id !== todo.id &&  todo 
    ))
       console.log(deletedTodo)
        dispatch({type:'delete', payload:deletedTodo})
    }
    
  return (
    <ToDoContext.Provider value={{state, dispatch, addTooDoo, toggleTooDoo, deleteToDo}}>
        {props.children}
    </ToDoContext.Provider>
  )
}

