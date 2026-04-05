import { MdOutlineModeEditOutline } from "react-icons/md";

function EditItem() {
  return (
    <div className="p-2 bg-teal-700 cursor-pointer rounded-md active:scale-96 transition-all duration-300 ease flex flex-row w-fit">
      <MdOutlineModeEditOutline className="text-xl" />
    </div>
  );
}

export default EditItem;
