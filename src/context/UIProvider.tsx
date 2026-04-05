import { useState, type ReactNode } from "react";
import { UIContext } from "./UIContext";

export function UIProvider({ children }: { children: ReactNode }) {
  const [isAddItemModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<string | null>(null);
  const [todoToEdit, setTodoToEdit] = useState<string | null>(null);

  function openDeleteModal(id: string) {
    setTodoToDelete(id);
    setIsDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setTodoToDelete(null);
    setIsDeleteModalOpen(false);
  }

  function openEditModal(id: string) {
    setTodoToEdit(id);
    setEditModalOpen(true);
  }

  function closeEditModal() {
    setTodoToEdit(null);
    setEditModalOpen(false);
  }

  return (
    <UIContext.Provider
      value={{
        isAddItemModalOpen,
        isEditModalOpen,
        isDeleteModalOpen,
        todoToDelete,
        todoToEdit,

        openAddItemModal: () => setAddModalOpen(true),
        closeAddItemModal: () => setAddModalOpen(false),

        openEditModal,
        closeEditModal,

        openDeleteModal,
        closeDeleteModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
