import { create } from "zustand";

type SideBarState = {
  isOpen: boolean;
  toggle: () => void;
};

export const useSideBarStore = create<SideBarState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
