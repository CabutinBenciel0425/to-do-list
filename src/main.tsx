import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { UIProvider } from "./context/UIProvider.tsx";
import { TodoProvider } from "./context/TodoProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </UIProvider>
  </StrictMode>,
);
