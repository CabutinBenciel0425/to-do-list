import { MdOutlineModeEditOutline } from "react-icons/md";
import { useUI } from "../hooks/useUI";

function EditItem({ id }: { id: string }) {
  const { openEditModal } = useUI();
  return (
    <div
      className="p-2 bg-teal-700 cursor-pointer rounded-md active:scale-96 transition-all duration-300 ease flex flex-row w-fit"
      onClick={() => openEditModal(id)}
    >
      <MdOutlineModeEditOutline className="text-xl" />
    </div>
  );
}

export default EditItem;
