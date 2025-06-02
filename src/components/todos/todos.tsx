import { memo } from "react";
import ItemTodo from "./item-todo";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import useTodo from "../../contexts/use-todos-value";

const TodoList: React.FC = memo(() => {
  const { todos } = useTodo();

  if (todos.length === 0)
    return (
      <Typography sx={{ fontSize: "2.5rem", textAlign: "center" }}>
        No tasks
      </Typography>
    );

  return (
    <List>
      {todos.map((todo) => (
        <ItemTodo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          comleted={todo.comleted}
        />
      ))}
    </List>
  );
});
export default TodoList;
