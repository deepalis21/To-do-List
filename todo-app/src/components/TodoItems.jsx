import React from 'react';
import './TodoItem.css';


const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className="todo-item-row">
      <div  className="todo-item-left">
        <span
  className="todo-toggle"
  onClick={() => toggle(id)}
>
  {isComplete ? '✅' : '⭕'}
</span>

        <p className="todo-text">{text}</p>
      </div>

    <span className="todo-delete"  onClick={() => deleteTodo(id)} role="button" aria-label="delete task">🗑</span>

    </div>
  );
};

export default TodoItems;
