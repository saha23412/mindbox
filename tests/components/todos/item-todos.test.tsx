import { render, screen } from "@testing-library/react";
import ItemTodo from "../../../src/components/todos/item-todo";
import type Todo from "../../../src/models";
import { TodoProvider } from "../../../src/contexts/todos";

describe("ItemTodo", () => {
  it("should render text", () => {
    const todo: Todo = { id: 1, text: "Задача", comleted: true };
    render(
      <TodoProvider>
        <ItemTodo text={todo.text} id={todo.id} comleted={todo.comleted} />
      </TodoProvider>
    );

    expect(screen.getByText(todo.text)).toBeInTheDocument();
  });
});
