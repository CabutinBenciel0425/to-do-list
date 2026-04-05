import CancelButton from "../UI/CancelButton";
import ConfirmButton from "../UI/ConfirmButton";

export default function AddItemModal() {
  return (
    <div className="w-96 h-96 bg-white rounded-md p-4 flex flex-col gap-5">
      <textarea className="resize-none w-full h-fit text-black border-2 border-gray-300 rounded-md flex-1 p-4 text-xl focus:border-black transition-all duration-300 ease"></textarea>
      <div className="w-full h-auto flex flex-row items-center justify-end gap-4">
        <CancelButton />
        <ConfirmButton />
      </div>
    </div>
  );
}
