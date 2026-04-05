import { createContext } from "react";

export type UIContextType = {
  isAddItemModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;

  openAddItemModal: () => void;
  closeAddItemModal: () => void;

  openEditModal: () => void;
  closeEditModal: () => void;

  openDeleteModal: () => void;
  closeDeleteModal: () => void;
};

export const UIContext = createContext<UIContextType>({
  isAddItemModalOpen: false,
  isEditModalOpen: false,
  isDeleteModalOpen: false,

  openAddItemModal: () => {},
  closeAddItemModal: () => {},

  openEditModal: () => {},
  closeEditModal: () => {},

  openDeleteModal: () => {},
  closeDeleteModal: () => {},
});
