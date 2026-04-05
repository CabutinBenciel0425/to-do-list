import AddItem from "./components/AddItem";
import List from "./components/List";
import "./styles.css";

function App() {
  return (
    <div className="flex h-200 w-200 items-center justify-start flex-col gap-4 p-5 text-gray-200 scroll-auto">
      <AddItem />
      <List />
    </div>
  );
}

export default App;
