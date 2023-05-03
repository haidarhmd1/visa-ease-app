import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import { USER_DATA } from 'res/constants/global';

export const initialUser = {
  token: null,
  isLoggedIn: false,
};

export const userInfo = {};

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

export const useUserStore = create(set => ({
  userData: userInfo,
  setUserInfo: userData => {
    set(() => ({ userData }));
  },
  removeUserInfo: () => {
    set(() => ({ userData: userInfo }));
  },
}));
