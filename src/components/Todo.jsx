import React, { useState } from "react";
import "./style.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //add function
  const addTodo = () => {
    setTodos([...todos, { list: todo, id: Date.now() }]);
    console.log(todo);
    setTodo("");
  };

  //delete function
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
            <li key={index}>
              {todo.list}
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => onDelete(todo.id)}
              >
                <button>EDIT</button>
              </i>
              <IoCheckmarkDoneCircle id="don" />
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Todo;
