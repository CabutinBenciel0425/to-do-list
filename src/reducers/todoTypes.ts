import type { Todo } from "../data/Todos";

export type TodoState = {
  todos: Todo[];
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "UPDATE_TODO"; payload: { id: string; text: string } };
