import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export function useTodos() {
  const { state, dispatch } = useContext(TodoContext);

  function toggleTodo(id: string) {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }

  function updateTodo(id: string, text: string) {
    dispatch({ type: "UPDATE_TODO", payload: { text, id } });
  }
  return { state, dispatch, toggleTodo, updateTodo };
}
