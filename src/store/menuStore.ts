import { create } from "zustand";

export interface Store {
  currentMenu: string | null;
  setCurrentMenu: (menu: string) => void;
}

const useMenuStore = create<Store>(set => ({
  currentMenu: null,
  setCurrentMenu: newState => {
    set(() => ({ currentMenu: newState }));
  },
}));

export default useMenuStore;
