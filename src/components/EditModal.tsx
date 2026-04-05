import CancelButton from "../UI/CancelButton";
import ConfirmButton from "../UI/ConfirmButton";

export default function Editmodal() {
  return (
    <div className="w-auto h-auto bg-white rounded-md p-8 flex flex-col gap-8">
      <p className="text-bold text-wrap text-black text-2xl">
        Are you sure you want to update this item?
      </p>
      <div className="w-full h-auto flex flex-row items-center justify-end gap-4">
        <CancelButton />
        <ConfirmButton />
      </div>
    </div>
  );
}
