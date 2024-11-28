import React, { useState } from "react";
import "./style.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  //add function

  const addTodo = () => {
    if (todo != "") {
      setTodos([...todos, { list: todo, id: Date.now(), status: false }]);
      console.log(todo);
      setTodo("");
    }
   //Edit fuction 2
    if (editId) {
      // Find the todo item to be edited
      const editTodo = todos.find((todo) => todo.id === editId);
      // Update the todos array
      const updatedTodos = todos.map(
        (newtodo) =>
          newtodo.id === editTodo.id
            ? { id: newtodo.id, list: todo } // Replace the matched todo with updated data
            : newtodo // Keep other todos unchanged
      );
      // Update the state with the new todos array
      setTodos(updatedTodos);
      setEditId(0); // Reset the editId
      setTodo(""); // Clear the input field
    }
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

  //Edit Function 1
  const onEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    console.log(editTodo.list);
    setTodo(editTodo.list);
    setEditId(editTodo.id);
    console.log(editTodo);
  };
  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="add-box">
        <input
          type="text"
          value={todo}
          placeholder="Enter Your Tasklist"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button id="add-btn" onClick={addTodo}>
          {editId ? "EDIT" : "ADD"}
        </button>
      </div>
      <h2>Task List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span id={todo.status ? "trans" : ""}> {todo.list}</span>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => onDelete(todo.id)}
            ></i>
            <LiaEditSolid id="edit" onClick={() => onEdit(todo.id)} />
            <IoCheckmarkDoneCircle
              id="don"
              onClick={() => onCompleat(todo.id)}
            />
          </li>
        ))}
      </ul>
      <p>Task completd</p>
    </div>
  );
};

export default Todo;
