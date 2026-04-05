import { useState, type ReactNode } from "react";
import { UIContext } from "./UIContext";

export function UIProvider({ children }: { children: ReactNode }) {
  const [isAddItemModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        isAddItemModalOpen,
        isEditModalOpen,
        isDeleteModalOpen,

        openAddItemModal: () => setAddModalOpen(true),
        closeAddItemModal: () => setAddModalOpen(false),

        openEditModal: () => setEditModalOpen(true),
        closeEditModal: () => setEditModalOpen(false),

        openDeleteModal: () => setDeleteModalOpen(true),
        closeDeleteModal: () => setDeleteModalOpen(false),
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
