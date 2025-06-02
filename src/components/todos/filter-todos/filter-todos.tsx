import { memo } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useTodo from "../../../contexts/use-todos-value";
import useTodoActions from "../../../contexts/use-todos-actions";

interface FilterTodosProps {
  status: "all" | "completed" | "active";
  setStatus: (status: "all" | "completed" | "active") => void;
}
const FilterTodos: React.FC<FilterTodosProps> = memo(
  ({ setStatus, status }) => {
    const { amountLeftTodos } = useTodo();
    const { removeCompletedTodo, activeTodo, completedTodo, allTodo } =
      useTodoActions();

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "5px 15px",
        }}
      >
        <Typography sx={{ fontSize: "1rem", fontWeight: 100 }}>
          {amountLeftTodos} items left{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{ border: status === "all" ? "1px solid #ECD8D8" : "none" }}
            onClick={() => {
              setStatus("all");
              allTodo();
            }}
          >
            All
          </Button>
          <Button
            onClick={() => {
              setStatus("active");
              activeTodo();
            }}
            sx={{
              mr: "5px",
              ml: "5px",
              border: status === "active" ? "1px solid #ECD8D8" : "none",
            }}
          >
            Active
          </Button>
          <Button
            sx={{
              border: status === "completed" ? "1px solid #ECD8D8" : "none",
            }}
            onClick={() => {
              setStatus("completed");
              completedTodo();
            }}
          >
            Completed
          </Button>
        </Box>
        <Button
          onClick={() => {
            setStatus("all");
            removeCompletedTodo();
          }}
        >
          Clear completed
        </Button>
      </Box>
    );
  }
);

export default FilterTodos;
