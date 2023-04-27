import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import { USER_DATA } from 'res/constants/global';

export const initialUser = {
  token: null,
  id: '',
  email: '',
  fullname: '',
  isLoggedIn: false,
};

export const useAuthStore = create(set => ({
  user: initialUser,
  signIn: user => {
    SecureStore.setItemAsync(USER_DATA, JSON.stringify(user))
      .then(() => {
        set(() => ({ user }));
      })
      .catch(() => {
        set(() => ({ user: initialUser }));
      });
  },
  signOut: () => {
    SecureStore.deleteItemAsync(USER_DATA)
      .then(() => {
        set(() => ({ user: initialUser }));
      })
      .catch(error => console.error(error));
  },
}));
