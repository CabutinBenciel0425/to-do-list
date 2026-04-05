import { useState } from "react";
import { createTodo } from "../services/todoServices";
import CancelButton from "../UI/CancelButton";
import ConfirmButton from "../UI/ConfirmButton";
import { useTodos } from "../hooks/useTodos";
import { useUI } from "../hooks/useUI";

export default function AddItemModal() {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();
  const { closeAddItemModal } = useUI();

  function handleAddItem() {
    if (!text.trim()) return;

    const newTodo = createTodo(text);

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setText("");
    closeAddItemModal();
  }
  return (
    <div className="w-96 h-96 bg-white rounded-md p-4 flex flex-col gap-5">
      <textarea
        className="resize-none w-full h-fit text-black border-2 border-gray-300 rounded-md flex-1 p-4 text-xl focus:border-black transition-all duration-300 ease placeholder-gray-400"
        placeholder="Write here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="w-full h-auto flex flex-row items-center justify-end gap-4">
        <CancelButton onClick={closeAddItemModal} />
        <ConfirmButton onClick={handleAddItem} />
      </div>
    </div>
  );
}
