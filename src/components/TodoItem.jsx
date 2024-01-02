import React from "react";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAsyncTodo, toggleAsyncTodo,} from "./features/todoSlice";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className={`todoItem ${todo.completed ? "completed" : ""}`}>
      <p className="todoTitle">{todo.title}</p>
      <span className="todoFunctions">
        <button
          className="todoFunctionBtn check"
          onClick={()=>dispatch(toggleAsyncTodo({id:todo.id,completed:!todo.completed}))}
        >
          <FaCheckCircle />
        </button>
        <button
          className="todoFunctionBtn trash"
          onClick={() => dispatch(deleteAsyncTodo(todo.id))}
        >
          <FaTrashAlt />
        </button>
      </span>
    </div>
  );
}

export default TodoItem;
