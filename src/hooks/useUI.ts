import { UIContext } from "./../context/UIContext";
import { useContext } from "react";

export function useUI() {
  return useContext(UIContext);
}
