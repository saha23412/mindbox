import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type Todo from "../models";

interface TodoContext {
  todos: Todo[];
  amountLeftTodos: number;
}

interface TodoActions {
  addTodo: (todo: Todo) => void;
  allTodo: () => void;
  activeTodo: () => void;
  completedTodo: () => void;
  toggleTodo: (id: number) => void;
  removeCompletedTodo: () => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<TodoContext | null>(null);
export const TodoActionsContext = createContext<TodoActions | null>(null);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const amountLeftTodos = todos.filter((todo: Todo) => !todo.comleted).length;

  const allTodo = useCallback(() => {
    const todosLocal: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    setTodos(todosLocal);
  }, []);

  const activeTodo = useCallback(() => {
    setTodos((todos: Todo[]) => {
      const localStorageTodos: Todo[] = JSON.parse(
        localStorage.getItem("todos") || "[]"
      );
      const actualTodo: Todo[] = localStorageTodos.length
        ? localStorageTodos
        : todos;
      const newTodos = actualTodo.filter((todo: Todo) => !todo.comleted);
      return newTodos;
    });
  }, []);

  const completedTodo = useCallback(() => {
    setTodos((todos: Todo[]) => {
      const localStorageTodos: Todo[] = JSON.parse(
        localStorage.getItem("todos") || "[]"
      );
      const actualTodo: Todo[] = localStorageTodos.length
        ? localStorageTodos
        : todos;
      const newTodos = actualTodo.filter((todo: Todo) => todo.comleted);
      return newTodos;
    });
  }, []);

  const addTodo = useCallback((todo: Todo) => {
    setTodos(() => {
      const localStorageTodos: Todo[] = JSON.parse(
        localStorage.getItem("todos") || "[]"
      );
      const checkLocalStorage =
        localStorageTodos.length > 0 ? localStorageTodos : todos;
      localStorage.setItem(
        "todos",
        JSON.stringify([...checkLocalStorage, todo])
      );
      return [...localStorageTodos, todo];
    });
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((todos: Todo[]) => {
      const newTodos = todos.map((todo: Todo) => {
        if (todo.id === id) {
          const newTodo = { ...todo, comleted: !todo.comleted };

          return newTodo;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }, []);

  const removeCompletedTodo = useCallback(() => {
    setTodos((todos: Todo[]) => {
      const localStorageTodos: Todo[] = JSON.parse(
        localStorage.getItem("todos") || "[]"
      );
      const actualTodo: Todo[] = localStorageTodos.length
        ? localStorageTodos
        : todos;
      const newTodos = actualTodo.filter((todo: Todo) => !todo.comleted);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }, []);

  const value = useMemo(
    () => ({
      todos,
      amountLeftTodos,
    }),
    [todos, amountLeftTodos]
  );

  const actions = useMemo(
    () => ({
      addTodo,
      toggleTodo,
      removeCompletedTodo,
      allTodo,
      activeTodo,
      completedTodo,
    }),
    [
      addTodo,
      toggleTodo,
      removeCompletedTodo,
      allTodo,
      activeTodo,
      completedTodo,
    ]
  );
  return (
    <TodoContext.Provider value={value}>
      <TodoActionsContext.Provider value={actions}>
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
