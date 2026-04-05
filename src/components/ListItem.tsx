import type { Todo } from "../data/Todos";

export default function ListItem({ todo }: { todo: Todo }) {
  return (
    <div className="text-2xl flex gap-5">
      <input type="checkbox" id={todo.id} className="h-5 w-5 mt-2" />
      <label htmlFor={todo.id}>{todo.text}</label>
    </div>
  );
}
