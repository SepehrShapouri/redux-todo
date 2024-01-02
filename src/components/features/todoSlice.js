import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
const api = axios.create({
  baseURL: "http://localhost:5000/",
});
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/todos");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/todos", {
        title: payload.title,
        id: Date.now(),
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteAsyncTodo = createAsyncThunk(
    "todos/deleteAsyncTodo",
    async (payload, { rejectWithValue }) => {
      try {
        await api.delete(`/todos/${payload}`);
        return  payload ;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
export const toggleAsyncTodo = createAsyncThunk("todos/toggleAsyncTodo",async (payload,{})=>{
    try {
        const response = await api.patch(`/todos/${payload.id}`,{completed : payload.completed})
        return response.data
    } catch (error) {
        
    }
})
const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state, action) => {
        (state.isLoading = true), (state.todos = []), (state.error = null);
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.todos = action.payload),
          (state.error = null);
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        (state.isLoading = false),
          (state.todos = []),
          (state.error = action.payload);
      })
      .addCase(addAsyncTodo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addAsyncTodo.fulfilled, (state, action) => {
        (state.isLoading = false), state.todos.push(action.payload);
      })
      .addCase(deleteAsyncTodo.fulfilled,(state,action)=>{
    state.todos = state.todos.filter(todo=>todo.id!=action.payload)
      })
      .addCase(toggleAsyncTodo.fulfilled,(state,action)=>{
        const selectedTodo = state.todos.find(t=>t.id == action.payload.id)
        selectedTodo.completed = action.payload.completed
      })
  },
});
export default todoSlice.reducer;
