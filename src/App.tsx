import AddItem from "./components/AddItem";
import AddItemModal from "./components/AddItemModal";
import DeleteModal from "./components/DeleteModal";
import List from "./components/List";
import { fakeTodos } from "./data/Todos";
import { useUI } from "./hooks/useUI";
import "./styles.css";

function App() {
  const {
    isAddItemModalOpen,
    closeAddItemModal,
    isDeleteModalOpen,
    closeDeleteModal,
  } = useUI();
  console.log(fakeTodos);
  return (
    <>
      <div className="flex h-200 w-200 items-center justify-start flex-col gap-4 p-5 text-gray-200 scroll-auto">
        <AddItem />
        <List />
      </div>
      {isAddItemModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeAddItemModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <AddItemModal />
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeDeleteModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <DeleteModal />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
