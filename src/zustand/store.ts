import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  name: string;
}

const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        name: "Nymph",
      }),
      {
        name: "app-storage",
      },
    ),
  ),
);

export default useAppStore;
