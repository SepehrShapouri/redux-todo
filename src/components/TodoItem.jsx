import React from "react";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "./features/todoSlice";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className={`todoItem ${todo.completed ? "completed" : ""}`}>
      <p className="todoTitle">{todo.title}</p>
      <span className="todoFunctions">
        <button
          className="todoFunctionBtn check"
          onClick={() => dispatch(completeTodo(todo.id))}
        >
          <FaCheckCircle />
        </button>
        <button
          className="todoFunctionBtn trash"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <FaTrashAlt />
        </button>
      </span>
    </div>
  );
}

export default TodoItem;
