import { create } from 'zustand'

export const useStore = create((set) => ({
  games: [],
  token: null,
  setGames: (games) => set(() => ({ games })),
  setToken: (token) => set(() => ({ token })),
}));
