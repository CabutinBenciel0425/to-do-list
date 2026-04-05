import { FaTrashCan } from "react-icons/fa6";

function DeleteItem() {
  return (
    <div className="p-2 bg-red-700 cursor-pointer rounded-md active:scale-96 transition-all duration-300 ease flex flex-row w-fit">
      <FaTrashCan className="text-xl" />
    </div>
  );
}

export default DeleteItem;
