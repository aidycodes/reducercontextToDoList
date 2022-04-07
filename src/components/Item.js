import React from 'react'

const Item = (props) => {
    console.log(props.id, 'ff')
  return (
    <div className="text" onClick={() => props.onClick(props.todoId)} style={{textDecorationLine:props.completed ? 'line-through': 'none'}}>{props.children}</div>
  )
}

export default Item