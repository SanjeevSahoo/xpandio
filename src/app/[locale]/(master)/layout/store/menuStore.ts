import TMenu from "@/_common/types/TMenu";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TMenuState {
  selectedMenu: TMenu;
  setSelectedMenu: (newMenu: TMenu) => void;
}

export const menuStore = create<TMenuState>()(
  persist(
    (set) => ({
      selectedMenu: {
        id: 0,
        name: "",
        mas_id: 0,
        sr_no: 0,
        menu_type: "Relative",
        menu_url: "",
        project_id: 0,
        module_id: 0,
        status: "Active",
      },
      setSelectedMenu: (newMenu) => set(() => ({ selectedMenu: newMenu })),
    }),
    { name: "menuStore", storage: createJSONStorage(() => sessionStorage) }
  )
);
