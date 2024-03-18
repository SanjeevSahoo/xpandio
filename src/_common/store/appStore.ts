import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TAppState {
  appBase: string;
  setAppBase: (newAppBase: string) => void;
}

export const appStore = create<TAppState>()(
  persist(
    (set) => ({
      appBase: "/",
      setAppBase: (newAppBase) => set(() => ({ appBase: newAppBase })),
    }),
    { name: "appStore", storage: createJSONStorage(() => sessionStorage) }
  )
);
