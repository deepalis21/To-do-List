import React, { useRef, useState ,useEffect} from 'react';
import './Todo.css';
import TodoItems from './TodoItems';

const Todo = () => {
 const inputRef = useRef();
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);

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
  const deleteTodo = (id) => {
  setTodoList((prevTodos) => {
    return prevTodos.filter((todo) => todo.id !== id);
  });
};
const toggle = (id) => {
  setTodoList((prevTodos) => {
    return prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
  });
};



useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList));
}, [todoList]);


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
{todoList.map((item, index) => (
  <TodoItems
    key={index}
    id={item.id}
    text={item.text}
    isComplete={item.isComplete}
    deleteTodo={deleteTodo}
    toggle={toggle}
  />
))}

</div>
    </div>
  );
};

export default Todo;
