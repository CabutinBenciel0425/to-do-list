import { FaTrashCan } from "react-icons/fa6";
import { useUI } from "../hooks/useUI";

type DeleteItemProps = {
  id: string;
};

function DeleteItem({ id }: DeleteItemProps) {
  const { openDeleteModal } = useUI();
  return (
    <div
      className="p-2 bg-red-700 cursor-pointer rounded-md active:scale-96 transition-all duration-300 ease flex flex-row w-fit"
      onClick={() => openDeleteModal(id)}
    >
      <FaTrashCan className="text-xl" />
    </div>
  );
}

export default DeleteItem;
