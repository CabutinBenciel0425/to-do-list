import type { Todo } from "../data/Todos";

export function createTodo(text: string): Todo {
  return {
    id: crypto.randomUUID(),
    date_created: new Date().toISOString(),
    text,
    isDone: false,
  };
}

export function updateTodoFields(todo: Todo, fields: Partial<Todo>): Todo {
  return {
    ...todo,
    ...fields,
  };
}
