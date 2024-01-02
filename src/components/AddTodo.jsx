import React, { useState } from 'react'
import { Button, TextField } from "@mui/material/";
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todoSlice';
import { toast } from 'react-toastify';
function AddTodo() {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState("");
  const submitHandler = e=>{
    e.preventDefault()
    if(!todoValue)return 
    dispatch(addTodo({title:todoValue}))
  }
  return (
    <form className="addTodo" onSubmit={(e) => submitHandler(e)}>
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
    >
      Add
    </Button>
  </form>
  )
}

export default AddTodo