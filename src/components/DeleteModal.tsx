import { useTodos } from "../hooks/useTodos";
import { useUI } from "../hooks/useUI";
import CancelButton from "../UI/CancelButton";
import ConfirmButton from "../UI/ConfirmButton";

export default function DeleteModal() {
  const { todoToDelete, closeDeleteModal } = useUI();
  const { dispatch } = useTodos();

  function handleDeleteItem() {
    if (!todoToDelete) return;

    dispatch({
      type: "DELETE_TODO",
      payload: todoToDelete,
    });

    closeDeleteModal();
  }
  return (
    <div className="w-auto h-auto bg-white rounded-md p-8 flex flex-col gap-8">
      <p className="text-bold text-wrap text-black text-2xl">
        Are you sure you want to delete this item?
      </p>
      <div className="w-full h-auto flex flex-row items-center justify-end gap-4">
        <CancelButton onClick={closeDeleteModal} />
        <ConfirmButton onClick={handleDeleteItem} />
      </div>
    </div>
  );
}
