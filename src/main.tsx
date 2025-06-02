import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/theme.ts";
import { TodoProvider } from "./contexts/todos.tsx";
import "./reset.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ThemeProvider>
);
