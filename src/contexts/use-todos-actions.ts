import { useContext } from "react";
import { TodoActionsContext } from "./todos";

const useTodoActions = () => {
  const todoContext = useContext(TodoActionsContext);
  if (!todoContext) throw "Error TodoActionsContext";
  return todoContext;
};

export default useTodoActions;
