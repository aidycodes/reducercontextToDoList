import React from 'react'

const Item = (props) => {
  
  return (
    <div className="item" onClick={() => props.onClick(props.todoId)} style={{textDecorationLine:props.completed ? 'line-through': 'none'}}>{props.children}</div>
  )
}

export default Item