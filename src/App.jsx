import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "./components/features/todoSlice";
function App() {
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <Header />
        <div className="todoApp">
          <AddTodo />
          <div className="todoList">
            {isLoading ? (
              <p>Loading ...</p>
            ) : (
              <div>
                {todos.map((todo) => {
                  return <TodoItem key={todo.id} todo={todo} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
