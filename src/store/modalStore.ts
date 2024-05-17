import { create } from "zustand";

export type TModalStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const useModalStore = create<TModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useModalStore;
