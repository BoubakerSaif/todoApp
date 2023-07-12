import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Redux/todoSlice";
const UpdateTodo = ({ oldtask, showHandler, id }) => {
  const [task, setTask] = useState(oldtask);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  console.log(id);
  const dispatch = useDispatch();
  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id, task }));
  };
  return (
    <div>
      <input defaultValue={oldtask} onChange={changeHandler} />
      <button onClick={saveHandler}>Save</button>
      <button onClick={showHandler}>Cancel</button>
    </div>
  );
};

export default UpdateTodo;
