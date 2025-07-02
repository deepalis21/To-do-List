import React from 'react';
import './TodoItem.css';


const TodoItems = ({text}) => {
  return (
    <div className="todo-item-row">
      <div className="todo-item-left">
        <p className="todo-text">{text}</p>
      </div>

    <span className="todo-delete" role="button" aria-label="delete task">🗑</span>

    </div>
  );
};

export default TodoItems;
