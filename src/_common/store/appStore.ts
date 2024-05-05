import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import TApp from "../types/project/TApp";
import { DEFAULT_APP } from "../constants";

interface TAppState {
  appDrawerStatus: {
    sidebar: boolean;
    settings: boolean;
    notification: boolean;
  };

  setAppDrawerStatus: (newAppDrawerStatus: {
    sidebar: boolean;
    settings: boolean;
    notification: boolean;
  }) => void;
  resetAppStore: () => void;
}

const initialState = {
  appDrawerStatus: { sidebar: false, settings: false, notification: false },
};

export const appStore = create<TAppState>()(
  persist(
    (set) => ({
      ...initialState,
      setAppDrawerStatus: (newAppDrawerStatus) =>
        set(() => ({ appDrawerStatus: newAppDrawerStatus })),
      resetAppStore: () => set(() => initialState),
    }),
    { name: "appStore", storage: createJSONStorage(() => sessionStorage) }
  )
);
