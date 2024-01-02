import React, { useState } from 'react'
import { Button, TextField } from "@mui/material/";
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todoSlice';
import { toast } from 'react-toastify';
function AddTodo() {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState("");
  
  return (
    <form className="addTodo">
    <div className="addInputWrapper">
      <TextField
        id="outlined-basic"
        label="add todo"
        variant="outlined"
        fullWidth
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
    </div>
    <Button
      type="submit"
      variant="contained"
      onClick={(e) => {dispatch(addTodo({title:todoValue,e})),setTodoValue("")}}
    >
      Add
    </Button>
  </form>
  )
}

export default AddTodo