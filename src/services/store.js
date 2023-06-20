import { create } from 'zustand'

export const useStore = create((set) => ({
  games: [],
  token: null,
  username: "",
  setGames: (games) => set(() => ({ games })),
  setToken: (token) => set(() => ({ token })),
  setUsername: (username) => set(() => ({ username })),
}));
