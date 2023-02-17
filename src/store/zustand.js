import { create } from 'zustand';

export const useAuthStore = create(set => ({
  username: null,
  setUser: () =>
    set(state => {
      // eslint-disable-next-line no-unused-expressions
      state.username;
    }),
  removeUser: () => set({ username: null }),
}));
