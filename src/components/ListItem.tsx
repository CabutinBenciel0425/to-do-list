import type { Todo } from "../data/Todos";

export default function ListItem({
  todo,
  onToggle,
}: {
  todo: Todo;
  onToggle: () => void;
}) {
  return (
    <div className="text-2xl flex gap-5">
      <input
        type="checkbox"
        id={todo.id}
        className="h-5 w-5 mt-2"
        checked={todo.isDone}
        onChange={onToggle}
      />
      <label
        htmlFor={todo.id}
        className={`${todo.isDone ? "line-through text-gray-500" : ""}`}
      >
        {todo.text}
      </label>
    </div>
  );
}
