import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TodoList from "./components/todos/todos";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import FilterTodos from "./components/todos/filter-todos/filter-todos";
import AccordionSummaryTodos from "./components/todos/accordion/accordion-todos";

const App: React.FC = () => {
  const [expand, setExpand] = useState(false);

  const [status, setStatus] = useState<"all" | "completed" | "active">("all");
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#EBDDDC",
          fontSize: "5.5rem",
          fontWeight: 100,
        }}
      >
        todos
      </Typography>
      <Box sx={{ width: "60%" }}>
        <Accordion expanded={expand}>
          <AccordionSummaryTodos
            toggleAcordion={toggleAcordion}
            setStatus={setStatus}
          />
          <AccordionDetails sx={{ p: "0 8px" }}>
            <TodoList />
            <FilterTodos status={status} setStatus={setStatus} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default App;
