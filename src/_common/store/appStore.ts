import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TAppState {
  appBase: string;
  appMode: string;
  setAppBase: (newAppBase: string) => void;
  setAppMode: (newAppMode: string) => void;
}

export const appStore = create<TAppState>()(
  persist(
    (set) => ({
      appBase: "/",
      appMode: "Default",
      setAppBase: (newAppBase) => set(() => ({ appBase: newAppBase })),
      setAppMode: (newAppMode) => set(() => ({ appMode: newAppMode })),
    }),
    { name: "appStore", storage: createJSONStorage(() => sessionStorage) }
  )
);
