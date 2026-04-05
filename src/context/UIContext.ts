import { createContext } from "react";

export type UIContextType = {
  isAddItemModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;

  todoToDelete: string | null;

  openAddItemModal: () => void;
  closeAddItemModal: () => void;

  openEditModal: () => void;
  closeEditModal: () => void;

  openDeleteModal: (id: string) => void;
  closeDeleteModal: () => void;
};

export const UIContext = createContext<UIContextType>({
  isAddItemModalOpen: false,
  isEditModalOpen: false,
  isDeleteModalOpen: false,
  todoToDelete: null,

  openAddItemModal: () => {},
  closeAddItemModal: () => {},

  openEditModal: () => {},
  closeEditModal: () => {},

  openDeleteModal: () => {},
  closeDeleteModal: () => {},
});
