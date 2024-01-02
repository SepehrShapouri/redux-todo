import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
function App() {
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <div className="container">
        <Header />
        <div className="todoApp">
          <AddTodo />
          <div className="todoList">
            {todos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
