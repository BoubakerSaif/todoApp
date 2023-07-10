import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../Redux/todoSlice";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(createTodo({ task }));
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <input type="text" onChange={changeHandler} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
