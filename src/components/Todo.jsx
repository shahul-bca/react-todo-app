import React from "react";
import "./style.css";
const Todo = () => {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="add-box">
        <input type="text" placeholder="Enter Your Taskset" />
        <button id="add-btn">ADD</button>
      </div>
      <h3>Task List</h3>
      <ul>
        <li>
          task1<i className="fa fa-trash" aria-hidden="true"></i>
        </li>
        <li>
          task2<i className="fa fa-trash" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
