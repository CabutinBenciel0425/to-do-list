import { useTodos } from "../hooks/useTodos";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import ListItem from "./ListItem";

export default function List() {
  const { state } = useTodos();
  return (
    <ul className="w-full flex flex-col gap-5 ">
      {state.todos.map((todo) => {
        return (
          <li
            className="w-full flex flex-row justify-between border-b-cyan-950 border-b py-4"
            key={todo.id}
          >
            <ListItem todo={todo} />
            <div className="flex flex-row gap-5">
              <EditItem />
              <DeleteItem />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
