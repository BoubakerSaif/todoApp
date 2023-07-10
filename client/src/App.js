import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./Redux/todoSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoRd);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <AddTodo />
      <br />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
