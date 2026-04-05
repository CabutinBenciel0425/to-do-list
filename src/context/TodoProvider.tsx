import { useReducer, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "../reducers/todoReducer";
import { fakeTodos } from "../data/Todos";

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, { todos: fakeTodos });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
