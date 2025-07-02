import React, { useRef, useState } from 'react';
import './Todo.css';
import TodoItems from './TodoItems';

const Todo = () => {
 const inputRef = useRef();
  const [todoList, setTodoList] = useState([]);

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false
    };

    setTodoList(prev => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  return (
    <div className="todo-container">
      {/* ------ title -------- */}
      <div className="todo-title">
    <h1 className="todo-heading">To-Do List</h1>
  </div>
  {/* ------ input box -------- */}
<div className="todo-input-box">
  <input ref={inputRef}
    className="todo-input"
    type="text"
    placeholder="Add your task"
  />
  <button onClick={add} className="todo-add-btn">ADD +</button>
</div>
<div>
{todoList.map((item, index) => {
  return <TodoItems key={index} text={item.text} />;
})}

</div>
    </div>
  );
};

export default Todo;
