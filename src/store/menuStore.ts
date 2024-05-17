import { create } from "zustand";

export type Menu = "home" | "mypage" | "setting";

export interface Store {
  currentMenu: Menu;
  setCurrentMenu: (menu: Menu) => void;
}

const useMenuStore = create<Store>((set) => ({
  currentMenu: "home",
  setCurrentMenu: (newState) => {
    set(() => ({ currentMenu: newState }));
  },
}));

export default useMenuStore;
