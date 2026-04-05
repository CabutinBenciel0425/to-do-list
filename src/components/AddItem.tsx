import { MdAdd } from "react-icons/md";

function AddItem() {
  return (
    <div className="w-full h-25 flex justify-end flex-row items-center">
      <div className="py-2 px-4 bg-green-600 cursor-pointer rounded-md active:scale-96 transition-all duration-300 ease w-fit">
        <MdAdd className="text-4xl" />
      </div>
    </div>
  );
}

export default AddItem;
