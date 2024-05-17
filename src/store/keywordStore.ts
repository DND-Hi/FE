import { create } from "zustand";

export type TKeyword = "all" | "big" | "small";

export interface Store {
  currentKeyword: TKeyword;
  setCurrentKeyword: (keyword: TKeyword) => void;
}

const useKeywordStore = create<Store>((set) => ({
  currentKeyword: "all",
  setCurrentKeyword: (newState) => {
    set(() => ({ currentKeyword: newState }));
  },
}));

export default useKeywordStore;
