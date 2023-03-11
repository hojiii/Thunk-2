import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todoSlice";
import "./App.css";

function App() {
  const dispacth = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispacth(__getTodos());
  }, []);

  if (isLoading) {
    return <div>로딩 중..</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
}

export default App;
