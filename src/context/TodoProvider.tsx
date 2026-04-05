import { useEffect, useReducer, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "../reducers/todoReducer";
import { fakeTodos } from "../data/Todos";

export function TodoProvider({ children }: { children: ReactNode }) {
  const stored = localStorage.getItem("todos");
  const initialTodos = stored ? JSON.parse(stored) : fakeTodos;

  const [state, dispatch] = useReducer(todoReducer, { todos: initialTodos });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
