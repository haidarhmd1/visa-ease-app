import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialUserState = {
  id: '',
  isLoggedIn: false,
};

export const useAuthenticationStore = create(
  persist(
    set => ({
      ...initialUserState,
      userAuth: (registeredId, isLoggedInState) =>
        set({ id: registeredId, isLoggedIn: isLoggedInState }),
      userLogout: () => set(initialUserState),
    }),
    {
      name: 'authentication-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

const initialAppbarTitleState = {
  title: '',
};

export const useAppbarTitleStore = create(set => ({
  ...initialAppbarTitleState,
  appbarTitle: appTitle => set({ title: appTitle }),
}));
