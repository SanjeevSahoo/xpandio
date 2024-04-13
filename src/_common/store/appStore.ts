import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import TApp from "../types/TApp";
import { DEFAULT_APP } from "../constants";

interface TAppState {
  selectedApp: TApp;
  appDrawerStatus: {
    sidebar: boolean;
    settings: boolean;
    notification: boolean;
  };

  setSelectedApp: (newApp: TApp) => void;
  setAppDrawerStatus: (newAppDrawerStatus: {
    sidebar: boolean;
    settings: boolean;
    notification: boolean;
  }) => void;
  resetAppStore: () => void;
}

const initialState = {
  selectedApp: DEFAULT_APP,
  appDrawerStatus: { sidebar: false, settings: false, notification: false },
};

export const appStore = create<TAppState>()(
  persist(
    (set) => ({
      ...initialState,
      setSelectedApp: (newApp) => set(() => ({ selectedApp: newApp })),
      setAppDrawerStatus: (newAppDrawerStatus) =>
        set(() => ({ appDrawerStatus: newAppDrawerStatus })),
      resetAppStore: () => set(() => initialState),
    }),
    { name: "appStore", storage: createJSONStorage(() => sessionStorage) }
  )
);
