import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TAppState {
  appBase: string;
  appMode: string;
  appDrawerStatus: {
    sidebar: boolean;
    settings: boolean;
    notification: boolean;
  };
  setAppBase: (newAppBase: string) => void;
  setAppMode: (newAppMode: string) => void;
  setAppDrawerStatus: (newAppDrawerStatus: {
    sidebar: boolean;
    settings: boolean;
    notification: boolean;
  }) => void;
}

export const appStore = create<TAppState>()(
  persist(
    (set) => ({
      appBase: "/",
      appMode: "NA",
      appDrawerStatus: { sidebar: false, settings: false, notification: false },
      setAppBase: (newAppBase) => set(() => ({ appBase: newAppBase })),
      setAppMode: (newAppMode) => set(() => ({ appMode: newAppMode })),
      setAppDrawerStatus: (newAppDrawerStatus) =>
        set(() => ({ appDrawerStatus: newAppDrawerStatus })),
    }),
    { name: "appStore", storage: createJSONStorage(() => sessionStorage) }
  )
);
