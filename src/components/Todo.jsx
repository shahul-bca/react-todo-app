import React, { useState } from "react";
import "./style.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //add function
  
  const addTodo = () => {
    setTodos([...todos, { list: todo, id: Date.now(), status: false }]);
    console.log(todo);
    setTodo("");
  };

  //delete function
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Task compleate Function

  const onCompleat = (id) => {
    let compleate = todos.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTodos(compleate);
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
              <span id={todo.status ? "trans" : ""}> {todo.list}</span>
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => onDelete(todo.id)}
              >
                <button>EDIT</button>
              </i>
              <IoCheckmarkDoneCircle
                id="don"
                onClick={() => onCompleat(todo.id)}
              />
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Todo;
