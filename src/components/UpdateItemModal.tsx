import { useState } from "react";
import CancelButton from "../UI/CancelButton";
import { useTodos } from "../hooks/useTodos";
import { useUI } from "../hooks/useUI";
import SaveButton from "../UI/SaveButton";

export default function UpdateItemModal({ id }: { id: string }) {
  const { state, updateTodo } = useTodos();
  const { closeEditModal } = useUI();

  const todo = state.todos.find((t) => t.id === id);
  const [text, setText] = useState(todo?.text || "");

  function handleUpdateItem() {
    if (!text.trim()) return;

    updateTodo(id, text);
    closeEditModal();
  }

  return (
    <div className="w-96 h-96 bg-white rounded-md p-4 flex flex-col gap-5">
      <textarea
        className="resize-none w-full h-fit text-black border-2 border-gray-300 rounded-md flex-1 p-4 text-xl focus:border-black transition-all duration-300 ease placeholder-gray-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="w-full h-auto flex flex-row items-center justify-end gap-4">
        <CancelButton onClick={closeEditModal} />
        <SaveButton onClick={handleUpdateItem} />
      </div>
    </div>
  );
}
