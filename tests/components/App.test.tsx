import { it, describe } from "vitest";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../src/constants/theme.ts";
import { TodoProvider } from "../../src/contexts/todos.tsx";
import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("group", () => {
  it("should", () => {
    render(
      <ThemeProvider theme={theme}>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ThemeProvider>
    );
    screen.debug();
  });
});
