import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { memo, useState, type ChangeEvent } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import useTodoActions from "../../../contexts/use-todos-actions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface AccordionTodosProps {
  toggleAcordion: () => void;
  setStatus: (status: "all" | "completed" | "active") => void;
}

const AccordionSummaryTodos: React.FC<AccordionTodosProps> = memo(
  ({ toggleAcordion, setStatus }) => {
    const [input, setInput] = useState<string>("");
    const { addTodo } = useTodoActions();
    return (
      <AccordionSummary
        sx={{ display: "flex", flexDirection: "row-reverse", p: 0 }}
        expandIcon={
          <KeyboardArrowDownIcon
            onClick={() => toggleAcordion()}
            sx={{ color: "#EEEEEE", fontSize: "2.5rem" }}
          />
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <TextField
            value={input}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setInput(event.target.value)
            }
            sx={{
              width: "100%",
              "& fieldset": { border: "none" },
              mr: "10px",
            }}
            placeholder="What needs to be done?"
          />
          <PlaylistAddIcon
            onClick={() => {
              if (input.length) {
                addTodo({ id: Date.now(), text: input, comleted: false });
                setStatus("all");
                setInput("");
              }
            }}
            fontSize="large"
            sx={{ mr: "20px", color: "#1976D2" }}
          />
        </Box>
      </AccordionSummary>
    );
  }
);

export default AccordionSummaryTodos;
