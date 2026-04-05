import { createContext } from "react";
import type { TodoState, TodoAction } from "../reducers/todoTypes";

export type TodoContextType = {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
};

export const TodoContext = createContext<TodoContextType>({
  state: { todos: [] },
  dispatch: () => {},
});
