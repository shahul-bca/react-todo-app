import React, { useState } from "react";
import "./style.css";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    console.log(todo);
  };
  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="add-box">
        <input
          type="text"
          value={todo}
          placeholder="Enter Your Taskset"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button id="add-btn" onClick={addTodo}>
          ADD
        </button>
      </div>
      <h2>Task List</h2>
      <ul>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}<i className="fa fa-trash" aria-hidden="true"></i></li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Todo;
