import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ title: "hello", id: 1, completed: false }],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        action.payload.e.preventDefault()
        const newTodo = {
            title:action.payload.title,
            id:Date.now(),
            completed:false
        } 
               state.todos.push(newTodo)
    },
    completeTodo: (state, action) => {
        const todo = state.todos.find(t=>t.id==action.payload)
        todo.completed = !todo.completed
    },
    deleteTodo: (state, action) => {
       state.todos = state.todos.filter(t=>t.id!=action.payload)
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
