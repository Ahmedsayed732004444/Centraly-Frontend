import { create } from 'zustand';

interface HeaderState {
  title: string;
  showBackButton: boolean;
  backPath?: string;
  setTitle: (title: string) => void;
  setBackButton: (show: boolean, path?: string) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  title: 'سنترالي',
  showBackButton: false,
  backPath: undefined,
  setTitle: (title) => set({ title }),
  setBackButton: (showBackButton, backPath) => set({ showBackButton, backPath }),
}));
