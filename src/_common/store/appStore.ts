import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import TApp from "../types/TApp";
import { DEFAULT_APP } from "../constants";

interface TAppState {
  appBase: string;
  appMode: string;
  selectedApp: TApp;
  appDrawerStatus: {
    sidebar: boolean;
    settings: boolean;
    notification: boolean;
  };
  setAppBase: (newAppBase: string) => void;
  setAppMode: (newAppMode: string) => void;
  setSelectedApp: (newApp: TApp) => void;
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
      appMode: "Default",
      selectedApp: DEFAULT_APP,
      appDrawerStatus: { sidebar: false, settings: false, notification: false },
      setAppBase: (newAppBase) => set(() => ({ appBase: newAppBase })),
      setAppMode: (newAppMode) => set(() => ({ appMode: newAppMode })),
      setSelectedApp: (newApp) => set(() => ({ selectedApp: newApp })),
      setAppDrawerStatus: (newAppDrawerStatus) =>
        set(() => ({ appDrawerStatus: newAppDrawerStatus })),
    }),
    { name: "appStore", storage: createJSONStorage(() => sessionStorage) }
  )
);
