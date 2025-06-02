import { memo } from "react";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import useTodoActions from "../../contexts/use-todos-actions";
import CircleChecked from "@mui/icons-material/CheckCircleOutline";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";

interface ItemTodoProps {
  id: number;
  comleted: boolean;
  text: string;
}

const ItemTodo: React.FC<ItemTodoProps> = memo(({ text, comleted, id }) => {
  const { toggleTodo } = useTodoActions();
  return (
    <ListItem sx={{ display: "flex", p: 0, m: 0 }}>
      <Checkbox
        onClick={() => toggleTodo(id)}
        checked={comleted}
        icon={
          <CircleUnchecked
            fontSize="large"
            sx={{ color: "#EEEEEE", strokeWidth: 1 }}
          />
        }
        checkedIcon={
          <CircleChecked fontSize="large" sx={{ color: "#7BC1B1" }} />
        }
      />
      <Typography
        sx={{
          ml: "25px",
          fontSize: "1.8rem",
          fontWeight: 100,
          textDecoration: `${comleted ? "line-through" : "none"}`,
          color: `${comleted ? "#EEEEEE" : "black"}`,
        }}
      >
        {text}
      </Typography>
    </ListItem>
  );
});
export default ItemTodo;
