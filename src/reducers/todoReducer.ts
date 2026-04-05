import type { TodoAction, TodoState } from "./todoTypes";

export function todoReducer(state: TodoState, action: TodoAction) {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };

    case "TOGGLE_TODO":
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, isDone: !todo.isDone }
              : todo,
          ),
        ],
      };

    case "UPDATE_TODO":
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, ...action.payload }
              : todo,
          ),
        ],
      };

    default:
      return state;
  }
}
