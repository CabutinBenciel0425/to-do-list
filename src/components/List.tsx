import { fakeTodos } from "../data/Todos";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import ListItem from "./ListItem";

export default function List() {
  return (
    <ul className="w-full flex flex-col gap-5 ">
      {fakeTodos.map((todo) => {
        return (
          <li className="w-full flex flex-row justify-between border-b-cyan-950 border-b py-4">
            <ListItem todo={todo} key={todo.id} />
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
