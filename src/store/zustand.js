import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthenticationStore = create(
  persist(
    set => ({
      id: '',
      isLoggedIn: false,
      userAuth: (registeredId, isLoggedInState) => {
        set({ id: registeredId, isLoggedIn: isLoggedInState });
      },
    }),
    {
      name: 'authentication-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
