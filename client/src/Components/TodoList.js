import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos?.map((el) => (
        <Todo todoInfo={el} key={el._id} />
      ))}
    </div>
  );
};

export default TodoList;
