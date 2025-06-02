import { useContext } from "react";
import { TodoContext } from "./todos";

const useTodo = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext) throw "Error TodoContext";
  return todoContext;
};

export default useTodo;
