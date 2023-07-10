import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/todoSlice";

const Todo = ({ todoInfo }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todoInfo._id));
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <p style={{ display: "inline", paddingRight: "15px" }}>{todoInfo.task}</p>
      <button onClick={deleteHandler}>X</button>
    </div>
  );
};

export default Todo;
