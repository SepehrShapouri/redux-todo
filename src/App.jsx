import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./components/features/store";
import { ToastContainer } from "react-toastify";
function App() {
  const {todos} = useSelector(state=>state.todos)
  console.log(todos)
  return (
    <div>
      <div className="container">
        <Header />
        <div className="todoApp">
          <AddTodo
          />
          <div className="todoList">
            {todos.map((todo) => {
              return (
                <TodoItem
                key={todo.id}
                  todo={todo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
