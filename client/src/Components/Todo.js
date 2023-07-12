import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/todoSlice";
import UpdateTodo from "./UpdateTodo";

const Todo = ({ todoInfo }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todoInfo._id));
  };
  const [show, setShow] = useState(false);

  const showHanler = () => {
    setShow(!show);
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <p style={{ display: "inline", paddingRight: "15px" }}>
          {todoInfo.task}
        </p>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={showHanler}>Edit</button>
      </div>
      {show && (
        <UpdateTodo
          oldtask={todoInfo.task}
          showHandler={showHanler}
          id={todoInfo._id}
        />
      )}
      <br />
    </div>
  );
};

export default Todo;
