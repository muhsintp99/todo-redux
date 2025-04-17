import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../container/todoSlice';


function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  console.log("text", text);


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        style={{
          height:'30px',
          width:'30%',
          border:'1px solid blue',
          borderRadius:'12px',
          padding:'0 8px',
          margin:'20px 0'
        }}
        required
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo